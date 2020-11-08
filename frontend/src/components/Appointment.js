import React ,{useState, useEffect} from 'react';
import Drawer from './Drawer'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
const axios = require("axios");
const useStyles = makeStyles((theme) => ({
  container: {
    //display: "flex"
  },
}));
function NameFind(arr,id){
    for(var i = 0;i<arr.length;i++)
    {   
       if(arr[i].uid == id)
       {
           var namefull = arr[i].fname + " " + arr[i].lname;
           var contact = arr[i].contactno;
       }
    }
return {name:namefull,contactno:contact};
}
function Appointments(){
    const classes = useStyles();
    //FETCH DATA USING USEEFFECT IN THE FORMAT GIVEN BELOW
    const [data,setData] = React.useState([]);
    const [users,setUsers] = React.useState([]);
    const [check_val,setCheck] = React.useState(false);
        React.useEffect(() => {
        
        axios.get(`http://localhost:5000/api/doctor/appointments/${localStorage.getItem("uid")}`,{
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
                
              }
  
        })    
         
        
        
        .then(function(response){
        console.log(response.data.data); 
        setData(response.data.data);
       
        
        
        }).catch(function (error) {
            console.log("Invalid Request");
          });
        
          axios.get("http://localhost:5000/api/users",{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
              
            }
    
          })    
         
        
        
        .then(function(response){
        console.log(response.data.message);  
        setUsers(response.data.message);
                  
        }).catch(function (error) {
            console.log("Invalid Request");
          });
      },[]);

      var temp;
      for(var i=0;i<data.length-1;i++)
      {

        for(var j=0;j<data.length-i-1;j++)
        {

           if(data[j].doa == data[j+1].doa)
           { 
           var x = parseInt(data[j].timeslot.substring(0,2));
          var y = parseInt(data[j+1].timeslot.substring(0,2))
          if(x > y)
          {
            temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
          } 
        }
        }
      }
      const handleCheck = (event) =>{
          console.log(event.target.checked);
          var j;
          for(var i=0;i<data.length;i++)
          {
              if(data[i].aid == parseInt(event.target.name))
              {
                  if(event.target.checked == true)
                  data[i].isDone = 1;
                  else if(event.target.checked == false)
                  data[i].isDone = 0;
                  j = i;
                  console.log("AID: " + data[i].aid + " isDone : "+ data[i].isDone);
              }
          }
          axios.put(`http://localhost:5000/api/doctor/appointments/${parseInt(event.target.name)}`,{
            d_uid:data[j].d_uid,
            p_uid:localStorage.getItem("uid"),
            reason:data[j].reason,
            isBooked:data[j].isBooked,
            isDone:data[j].isDone,
            timeslot:data[j].timeslot,
            doa:data[j].doa.substring(0,10),
            remarks:""
            
            
           
        }).then(function(response){

          if(response.data.success === 1)
          {
          console.log('Data posted successfully');
          
          }
          
            
            
            }).catch(function (error) {
                console.log("Invalid Post Request");
              });

      }
    return(
        <div className={classes.container}>
        <Drawer />
        <br />
            <Typography
            align = 'center'
            variant = 'h3'
            style = {{paddingTop:75}}
            > 
            YOUR APPOINTMENTS
            </Typography>
            <Divider /><br />
            <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>

        <Grid item xs={1}>
          
        </Grid>
        
        
        </Grid>
            <Grid container spacing={3}>
        <Grid item xs={2}>
        </Grid>

        <Grid item xs={1}>
        <Typography variant='h6'><u>Sr No.</u></Typography>
        </Grid>
        <Grid item xs={2}>
         <Typography variant='h6'><u>Name</u></Typography>
        </Grid>
        <Grid item xs={1}>
         <Typography variant='h6'><u>Contact</u></Typography>
        </Grid>
        <Grid item xs={1}>
        <Typography variant='h6'><u>Time Slot</u></Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'><u>Reason</u></Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant='h6'><u>isDone</u></Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'><u>Date</u></Typography>
        </Grid>

        

      </Grid>
      <Divider /> 


    
       {    
        
        data.map((currApp,i)=>{
         
          if(currApp.isDone == 0)
          

           return(  
                <div>
          <br />

              <Grid container spacing={3}>
              <Grid item xs={2}>
                 
              </Grid>

              <Grid item xs={1}>
           <Typography>{i+1}</Typography>
              </Grid>
              <Grid item xs={2}>
           <Typography>{NameFind(users,currApp.p_uid).name}</Typography>
              </Grid>
              <Grid item xs={1}>
           <Typography>{NameFind(users,currApp.p_uid).contactno}</Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography>{currApp.timeslot}</Typography>
              </Grid>
              <Grid item xs={2}>
              <Typography>{currApp.reason}</Typography>
              </Grid>
              <Grid item xs={1}>
                  
              
              
                   <Checkbox
                    value = {currApp.isDone}
                    name = {currApp.aid}
                    onChange = {handleCheck}
                    inputProps={{ id:'isp'}}
                   
                  />    
              
              </Grid>
              <Grid item xs={2}>
              <Typography>{currApp.doa.substring(0,10)}</Typography>
              </Grid>

              </Grid>
              <br />
              <Divider light/>
              </div>
           )})  
        }

         
            
       
      
        </div>
    )
}

export default Appointments;