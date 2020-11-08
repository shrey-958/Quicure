import React ,{useState, useEffect} from 'react';
import Drawer from './Drawer'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
const axios = require("axios");
const useStyles = makeStyles((theme) => ({
  container: {
    //display: "flex"
  },
}));

function PrivDoctor(){
    const classes = useStyles();
    //FETCH DATA USING USEEFFECT IN THE FORMAT GIVEN BELOW
    const [data,setData] = React.useState([]);
    React.useEffect(() => {
        
        axios.get("http://localhost:5000/api/doctor/private",{
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
                
              }
  
        })    
         
        
        
        .then(function(response){
        console.log(response.data.message); 
        setData(response.data.message);
         

        
        
        
        }).catch(function (error) {
            console.log("Invalid Request");
          });
       
        
       
      },[]);



    return(
        <div className={classes.container}>
        <Drawer />
        <br />
            <Typography
            align = 'center'
            variant = 'h3'
            style = {{paddingTop:75}}
            > 
            PRIVATE DOCTORS
            </Typography>
            <Divider />
            <br />
            <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>

        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={3}>
         <Typography variant='h6'><u>Name</u></Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'><u>City</u></Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'><u>State</u></Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='h6'><u>Specialization</u></Typography>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>

        

      </Grid>
      <Divider />
      {
          data.map((currDoc,i)=>{
            if(currDoc.uid != localStorage.getItem("uid"))
            
              return(
                  <div>
            <br />

                <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={1}>
                <Typography>{i+1}</Typography>
                </Grid>
                <Grid item xs={3}>
              <Link href={`/doctor/${currDoc.uid}`}>  <Typography>{currDoc.fname} {currDoc.lname}</Typography> </Link>
                </Grid>
                <Grid item xs={2}>
                <Typography>{currDoc.city}</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography>{currDoc.state}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{currDoc.specialization}</Typography>
                </Grid>
                <Grid item xs={1}>
                    
                </Grid>

                </Grid>
                <br />
                <Divider light/>
                </div>
              )
          })

      }
      
        </div>
    )
}

export default PrivDoctor;