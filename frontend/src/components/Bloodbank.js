import React ,{useState, useEffect} from 'react';
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

function Bloodbank(){
    const classes = useStyles();
    //FETCH DATA USING USEEFFECT IN THE FORMAT GIVEN BELOW
    const data = [{
        bbid : 1,
        name : "Health Bloodbank",
        city:"gfgfgre",
        state : "hfjsdf",
        contactno : "9865234512"
    },{
        bbid : 6,
        name : "Jio Bloodbank",
        city: "dfgsd",
        state : "hfjsdfdsfsdf",
        contactno : "7878456236"
    },{
        bbid : 5,
        name : "Newlife Bloodbank",
        city: "fdsgsdfg",
        state : "erewrwerf",
        contactno : "7884156712"
    }]
    return(
        <div className={classes.container}>
        <Drawer />
            <Typography
            align = 'centre'
            variant = 'h4'
            > 
            Bloodbank List
            </Typography>
            <br />
            <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>

        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={3}>
         <Typography variant='h6'>Bloodbank</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'>City</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='h6'>State</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='h6'>Contact</Typography>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>

        

      </Grid>
      <Divider />
      {
          data.map((currBb,i)=>{
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
                <Link href={`/bloodbank/${currBb.bbid}`}>  <Typography>{currBb.name}</Typography> </Link>
                </Grid>
                <Grid item xs={2}>
                <Typography>{currBb.city}</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography>{currBb.state}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{currBb.contactno}</Typography>
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

export default Bloodbank