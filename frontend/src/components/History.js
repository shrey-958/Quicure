import React, {useEffect, useState} from 'react';
import Drawer from './Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useParams} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
const axios = require("axios");
function NameFind(arr,id){
    for(var i = 0;i<arr.length;i++)
    {   
       if(arr[i].uid == id)
       {
           var namefull = arr[i].fname + " " + arr[i].lname;
           
       }
    }
return namefull;
}

function History(){
    const [hospHist, setchangehospHist] = useState([]);
    const [bbHist, setchangebbHist] = useState([]);
    const [docHist, changedocHist] = useState([]);
    const [users,setUsers] = useState([]);

    const params = useParams();
       React.useEffect(() => {
        
        axios.get(`http://localhost:5000/api/hospital/history/${localStorage.getItem("uid")}`)    
         
        
        
        .then(function(response){
         
       
        setchangehospHist(response.data.data);
        
        
        }).catch(function (error) {
            console.log("Invalid Request");
          });
          axios.get(`http://localhost:5000/api/bloodbank/history/${localStorage.getItem("uid")}`)    
         
        
        
          .then(function(response){
       
          console.log(response.data.message);
          setchangebbHist(response.data.message);
         
          
          
          
          }).catch(function (error) {
              console.log("Invalid Request");
            });

            axios.get(`http://localhost:5000/api/doctor/appointments/history/${localStorage.getItem("uid")}`,{
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
                  
                }
    
              })    
         
        
        
          .then(function(response){
       
          console.log(response.data.data);
          changedocHist(response.data.data); 
         
          
          
          
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


    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        
        content: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          padding: theme.spacing(3),
          paddingLeft:theme.spacing(20)
        },
      }));
      const classes = useStyles();
    return(
        <div >
        <Drawer />
            <div className = {classes.content} style={{marginTop:"10vh"}}>
                <Typography align = "center" variant="h3">YOUR HISTORY</Typography>
                <Divider />
                <br />
                <strong><u><Typography align = "center" variant="h5">HOSPITAL</Typography></u></strong>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'><u>Sr.</u></Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'><u>Hospital</u></Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'><u>Admit</u></Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'><u>Discharge</u></Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'><u>Reason</u></Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'><u>Remarks</u></Typography>
                    </Grid>
                    
                </Grid>
                <br />
                {
                    hospHist.map((hospCurr,i) => {
                        return(
                            <div>
                            <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'>{i+1}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospCurr.name}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospCurr.admitDate.substring(0,10)}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospCurr.dischargeDate}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospCurr.reason}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospCurr.remarks}</Typography>
                    </Grid>
                    
                </Grid>

                            </div>

                        )
                    })
                }
                <br /><br />
                <Divider />
                <br />
                <strong><u><Typography align = "center" variant="h5">BLOODBANK</Typography></u></strong>
                <br/> 
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'><u>Sr.</u></Typography>
                    </Grid>
                    <Grid item xs={5}>
                    <Typography variant='h6'><u>Bloodbank</u></Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant='h6'><u>Total Units Donated</u></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    
                    
                </Grid>
                <br />
                {
                    bbHist.map((bbCurr,i) => {
                        return(
                            <div>
                            <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'>{i+1}</Typography>
                    </Grid>
                    <Grid item xs={5}>
                    <Typography variant='h6'>{bbCurr.name}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant='h6'>{bbCurr.total}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    
                    
                </Grid>
                <br />

                            </div>

                        )
                    })
                }
                <Divider />
                <br />
                <strong><u><Typography align = "center" variant="h5">APPOINTMENTS</Typography></u></strong>
                <br/> 
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'><u>Sr.</u></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'><u>Doctor</u></Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'><u>Date</u></Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'><u>Timeslot</u></Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'><u>Reason</u></Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'><u>Remarks</u></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'><u>isDone</u></Typography>
                    </Grid>
                   
                    
                </Grid>
                <br />
                {
                    docHist.map((docCurr,i) => {
                        return(
                            <div>
                             <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant='h6'>{i+1}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant='h6'>{NameFind(users,docCurr.d_uid)}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='h6'>{docCurr.doa.substring(0,10)}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='h6'>{docCurr.timeslot}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='h6'>{docCurr.reason}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='h6'>{docCurr.remarks}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        {docCurr.isDone == 1?<Checkbox
                    checked = {true}
                   
                  />:<Checkbox
                 checked = {false}
                 
                />}
                        
                    </Grid>
                   
                    
                </Grid>
                            </div>

                        )
                    })
                }




            </div>
        </div>
    )
}

export default History