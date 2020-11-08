import React from 'react';
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

function Hospital(){
    const classes = useStyles();
    const [data,setData] = React.useState([]);
    
    React.useEffect(() => {
        
        axios.get("http://localhost:5000/api/hospital/all")    
         
        
        
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
            HOSPITAL LIST
            </Typography>
            <Divider />
            <br /><br />
            <Grid container spacing={3}>
        <Grid item xs={2}>
        </Grid>

        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={3}>
         <Typography variant='h6'><u>Hospital</u></Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'><u>City</u></Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'><u>State</u></Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='h6'><u>Beds Available</u></Typography>
        </Grid>
        <Grid item xs={1}>
          
        </Grid></Grid>
      <Divider />
      {
          data.map((currHos,i)=>{
              return(
                  <div>
            <br />

                <Grid container spacing={3}>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={1}>
                <Typography>{i+1}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Link href={`/hospital/${currHos.hospid}`}>  <Typography>{currHos.name}</Typography> </Link>
                </Grid>
                <Grid item xs={2}>
                <Typography>{currHos.city}</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography>{currHos.state}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{currHos.nbeds}</Typography>
                </Grid>
                <Grid item xs={1}>
                    
                </Grid>

                </Grid>
               
                <Divider light/>
                </div>
              )
          })

      }
      
        </div>
    )
}

export default Hospital