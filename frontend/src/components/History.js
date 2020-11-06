import React, {useEffect, useState} from 'react';
import Drawer from './Drawer'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';



function History(){
    const [hospHist, changehospHist] = useState([]);
    const [bbHist, changebbHist] = useState([]);
    const [docHist, changedocHist] = useState([]);

    /*
    EXAMPLES OF AN OBJECT FOR EACH ARRAY
    Hospital - {hospid,name, admitDate,dischargeDate,reason,remarks}
    Bloodbank - {bbid,name,total}
    Doctor - {d_uid,p_uid,reason,remarks,isBooked,isDone,timeslot,doa}
    */

    useEffect(()=>{
        //GET HISTORY FROM ALL THE 3 APIS
    //EXAMPLE OF A REQUEST
    /*
    
          fetch('https://the-fake-harry-potter-api.com/books')
              .then(response => response.json())
              .then(({ data: books }) => {
                  updateBooks(books);
              });
      */

    },[])


    return(
        <div >
        <Drawer />
            <div style={{marginTop:"5vh"}}>
                <Typography align="centre" variant="h3">YOUR HISTORY</Typography>
                <Divider />
                <Typography align="centre" variant="h5">HOSPITAL</Typography>
                <br/> 
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'>Sr.</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>Hospital</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>Admit</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>Discharge</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>Reason</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>Remarks</Typography>
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
                    <Typography variant='h6'>{i}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospHist.name}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospHist.admitDate}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospHist.dischargeDate}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospHist.reason}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>{hospHist.remarks}</Typography>
                    </Grid>
                    
                </Grid>

                            </div>

                        )
                    })
                }
                
                <Divider />
                <Typography align="centre" variant="h5">BLOODBANK</Typography>
                <br/> 
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'>Sr.</Typography>
                    </Grid>
                    <Grid item xs={5}>
                    <Typography variant='h6'>Bloodbank</Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant='h6'>Total Units Donated</Typography>
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
                    <Typography variant='h6'>{i}</Typography>
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
                <Typography align="centre" variant="h5">APPOINTMENTS</Typography>
                <br/> 
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Typography variant='h6'></Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'>Sr.</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'>Doctor</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>Date</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>Timeslot</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>Reason</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography variant='h6'>Remarks</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography variant='h6'>isDone</Typography>
                    </Grid>
                   
                    
                </Grid>
                <br />
                {
                    docHist.map((docCurr,i) => {
                        return(
                            <div>

                            </div>

                        )
                    })
                }




            </div>
        </div>
    )
}

export default History