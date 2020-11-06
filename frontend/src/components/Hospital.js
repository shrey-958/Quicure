import React from 'react';
import Drawer from './Drawer'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  container: {
    //display: "flex"
  },
}));

function Hospital(){
    const classes = useStyles();
    const data = [{
        hospid : 1,
        name : "Lilavati Hospital",
        city:"fsdfsd",
        state : "hfjsdf",
        nbeds : 5
    },{
        hospid : 6,
        name : "Kokila Hospital",
        city:"qweretr",
        state : "hfjsdfdsfsdf",
        nbeds : 8
    },{
        hospid : 5,
        name : "Nanavati Hospital",
        city:"xcvbn",
        state : "erewrwerf",
        nbeds : 2
    }]
    return(
        <div className={classes.container}>
        <Drawer />
            <Typography
            align = 'centre'
            variant = 'h4'
            > 
            Hospital List
            </Typography>
            <br />
            <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>

        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={3}>
         <Typography variant='h6'>Hospital</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'>City</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'>State</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='h6'>Beds Available</Typography>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>

        

      </Grid>
      <Divider />
      {
          data.map((currHos,i)=>{
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
                <br />
                <Divider light/>
                </div>
              )
          })

      }
      
        </div>
    )
}

export default Hospital