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

function Bloodbank(){
    const classes = useStyles();
    //FETCH DATA USING USEEFFECT IN THE FORMAT GIVEN BELOW
    const [data,setData] = React.useState([]);
    React.useEffect(() => {
        
        axios.get("http://localhost:5000/api/bloodbank/all")    
         
        
        
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
            BLOODBANK LIST
            </Typography>
            <Divider />
            <br />
            <br />
            <Grid container spacing={3}  >
        <Grid item xs={2}>
        </Grid>

        <Grid item xs={1}>
       
        </Grid>
        <Grid item xs={2}>
         <Typography variant='h6'><u>Bloodbank</u></Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'><u>City</u></Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'><u>State</u></Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant='h6'><u>Contact</u></Typography>
        </Grid>
        <Grid item xs={0}>
          
        </Grid>

        

      </Grid>
      <Divider />
      {
          data.map((currBb,i)=>{
              return(
                  <div>
            <br />

                <Grid container spacing={3}  >
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={1}>
                <Typography>{i+1}</Typography>
                </Grid>
                <Grid item xs={2}>
                <Link href={`/bloodbank/${currBb.bbid}`}>  <Typography>{currBb.name}</Typography> </Link>
                </Grid>
                <Grid item xs={2}>
                <Typography>{currBb.city}</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography>{currBb.state}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography>{currBb.contactno}</Typography>
                </Grid>
                <Grid item xs={0}>
                    
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

export default Bloodbank