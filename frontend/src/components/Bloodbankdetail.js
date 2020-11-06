import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Bloodbankdetail(){
    const initBook = {uid:"2",bbid:"4",blood_group:"A+ve",nunits:1};//initialise with proper uid , bbid and bloodgroup
    const initbbData = {bbid:"",name:"",email:"",city:"",state:"",pincode:"",street:"",contactno:""}//initalize with proper bbid
    const [bbData, changebbData] = useState(initbbData)
    useEffect(()=>{
         //get bb values from db
       /*
       //SAMPLE
       useEffect(function effectFunction() {
          fetch('https://the-fake-harry-potter-api.com/books')
              .then(response => response.json())
              .then(({ data: books }) => {
                  updateBooks(books);
              });
      }, []);*/

    },[])
    const donateBloodFunction = () => {
        //Push initBook, if success, then redirect to /bloodbank/book page
    }
    return(
        <div>
            <Link href="/bloodbanks"><Typography align="left" variant = 'h5'>Back to bloodbanks page</Typography></Link>
        <br />
        <Grid container spacing={3}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3}>
                <Typography variant='h6'>Name</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant='body1'>{bbData.name}</Typography>
                </Grid>
                <Grid item xs={2}>
                </Grid>
         </Grid>
         <Grid container spacing={3}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3}>
                <Typography variant='h6'>Email</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant='body1'>{bbData.email}</Typography>
                </Grid>
                <Grid item xs={2}>
                </Grid>
         </Grid>
         <Grid container spacing={3}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3}>
                <Typography variant='h6'>Address</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant='body1'>{`${bbData.street}, ${bbData.city}, ${bbData.state}, ${bbData.pincode}`}</Typography>
                </Grid>
                <Grid item xs={2}>
                </Grid>
         </Grid>
         <Grid container spacing={3}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3}>
                <Typography variant='h6'>Contact Number</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant='body1'>{bbData.contactno}</Typography>
                </Grid>
                <Grid item xs={2}>
                </Grid>
         </Grid>
         <br />
         <Divider />
        <br />
         <Typography align="centre" variant="h4">Donate blood, save a life</Typography>
           <br />
           <br />
        <Button size="large" variant="contained" color="secondary" onClick={donateBloodFunction}>
            DONATE A UNIT OF BLOOD
        </Button>
        </div>
    )
}

export default Bloodbankdetail