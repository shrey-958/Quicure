import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Hospitaldetail(){
    const today = new Date().toISOString().slice(0, 10);
    const inithospData = {hospid:"",name:"",email:"",city:"",state:"",pincode:"",street:"",nbeds:0,contactno:""}//initalize with proper hospid
    const initBook = {uid:"2",hospid:"4",reason:"", admitDate : today};//initialise with proper uid and hospid
    const [hospData, changehospData]=useState(inithospData);
    const [bookBed, changebookBed] = useState(initBook);
    useEffect(()=>{
        //get hosp values from db
       changehospData(prevState => ({hospid:"2",name:"Lilavati",email:"lila@gmail.com",city:"mumbai",state:"mah",pincode:"400106",street:"mg road",nbeds:5,contactno:"9897456126"}))
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

    const bookBedFunction = () =>{
        console.log(bookBed)
       //update request for hospData with number of hospital -1
       //post request for bookbed data
       // if all done, redirect to /hospital/book page
    }
        return(
        <div>
        <Link href="/hospitals"><Typography align="left" variant = 'h5'>Back to hospitals page</Typography></Link>
        <br />
        <Grid container spacing={3}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3}>
                <Typography variant='h6'>Name</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant='body1'>{hospData.name}</Typography>
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
                <Typography variant='body1'>{hospData.email}</Typography>
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
                <Typography variant='body1'>{`${hospData.street}, ${hospData.city}, ${hospData.state}, ${hospData.pincode}`}</Typography>
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
                <Typography variant='body1'>{hospData.contactno}</Typography>
                </Grid>
                <Grid item xs={2}>
                </Grid>
         </Grid>
         <Grid container spacing={3}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={3}>
                <Typography variant='h6'>Beds available</Typography>
                </Grid>
                <Grid item xs={4}>
                <Typography variant='body1'>{hospData.nbeds}</Typography>
                </Grid>
                <Grid item xs={2}>
                </Grid>
         </Grid>
         <br />
        <Divider />
        <br />
         <Typography align="centre" variant="h4">Book a bed</Typography>
           <br />
           <TextField
          required
          id="outlined-required"
          label="Reason"
          defaultValue=""
          variant="outlined"
          onChange={(e)=>changebookBed({...bookBed, reason:e.target.value})}
        />
        <br />
        <br />
        <Button size="large" variant="contained" color="secondary" onClick={bookBedFunction}>
            BOOK
        </Button>
           
        
        
        </div>
    )
}

export default Hospitaldetail