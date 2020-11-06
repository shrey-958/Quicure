import React, {useState, useEffect} from 'react';
import Drawer from './Drawer'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


function Home(){
  const initData={role:"Doctor"};
  const [userData, changeuserData]= useState(initData);
  const [docData, changedocData]= useState({});
  useEffect(()=>{
    //FETCH DATA OF THE USER and also doc data IF user is a doctor
    /* EXAMPLE
    fetch('https://the-fake-harry-potter-api.com/books')
           .then(response => response.json())
           .then(({ data: books }) => {
               updateBooks(books);
           });
    */
  },[])
  const updateData = () => {
    // POST THE NORMAL DATA IN USER TABLE
    // POST DOCTOR RELATED DATA IN THE DOCTOR TABLE

  }
    return(
        <div>
        <Drawer />
        <div style={{marginTop:"5vh"}}>
          <Typography align="centre" variant="h2">HOME</Typography>
          <br />
          <Divider />
          <br />
          <Grid container spacing={3}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={3}>
                <TextField
                  required
                  id="outlined-required"
                  label="First Name"
                  defaultValue={userData.fname}
                  variant="outlined"
                  onChange={(e)=>changeuserData({...userData, fname :e.target.value})}
                />
                </Grid>
                <Grid item xs={3}>
                <TextField
                  required
                  id="outlined-required"
                  label="Middle Name"
                  defaultValue={userData.mname}
                  variant="outlined"
                  onChange={(e)=>changeuserData({...userData, mname :e.target.value})}
                />
                </Grid>
                <Grid item xs={3}>
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  defaultValue={userData.lname}
                  variant="outlined"
                  onChange={(e)=>changeuserData({...userData, lname :e.target.value})}
                />
                </Grid>
                <Grid item xs={1}>
                </Grid>
         </Grid>
         <br />
         <Divider />
         <br />
         <Grid container spacing={3}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-required"
                  label="Aadhar ID"
                  defaultValue={userData.aadharid}
                  variant="outlined"
                  onChange={(e)=>changeuserData({...userData, aadharid :e.target.value})}
                />
                </Grid>
                <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-required"
                  label="Phone Number"
                  defaultValue={userData.contactno}
                  variant="outlined"
                  onChange={(e)=>changeuserData({...userData, contactno :e.target.value})}
                />
                </Grid>
                <Grid item xs={2}>
                </Grid>
         </Grid>
         <br />
         <Divider />
         <br />
         <Grid container spacing={3}>
          <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Street"
                  defaultValue={userData.street}
                  variant="outlined"
                  onChange={(e)=>changeuserData({...userData, street :e.target.value})}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="City"
                  defaultValue={userData.city}
                  variant="outlined"
                  onChange={(e)=>changeuserData({...userData, city :e.target.value})}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="State"
                  defaultValue={userData.state}
                  variant="outlined"
                  onChange={(e)=>changeuserData({...userData, state :e.target.value})}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Pincode"
                  defaultValue={userData.pincode}
                  variant="outlined"
                  onChange={(e)=>changeuserData({...userData, pincode :e.target.value})}
                />
                </Grid>
                <Grid item xs={2}>
                </Grid>
          </Grid>
          <br />
          <Divider />
         <br />
         <Grid container spacing={3}>
              <Grid item xs={3}>
                </Grid>
            <Grid item xs={3}>
            <InputLabel htmlFor="blood-group">Blood Group</InputLabel>
            <Select
          native
          value={userData.blood_group}
          onChange={(e)=>changeuserData({...userData, blood_group :e.target.value})}
          inputProps={{
            name: 'Blood Group',
            id: 'blood-group',
          }}
        >
          <option aria-label="None" value="" />
          <option value="A+ve">A+ve</option>
          <option value="A-ve">A-ve</option>
          <option value="B+ve">B+ve</option>
          <option value="B-ve">B-ve</option>
          <option value="AB+ve">AB+ve</option>
          <option value="AB-ve">AB-ve</option>
          <option value="O+ve">O+ve</option>
          <option value="O-ve">O-ve</option>
        </Select>
            </Grid>
            <Grid item xs={3}>
            <TextField
                id="date"
                label="Date Of Birth"
                type="date"
                defaultValue={userData.dob}
                onChange={(e)=>changeuserData({...userData, dob :e.target.value})}
                InputLabelProps={{
                  shrink: true,
                  }}
                />
              </Grid>
            <Grid item xs={3}>
            </Grid>
         </Grid>
         <br />
          <Divider />
         <br />
         {userData.role==="Doctor"&&
           (
           <div>
           <Grid container spacing={3}>
           <Grid item xs={2}></Grid>
           <Grid item xs={2}>
            <TextField
                id="outlined-required"
                label="Degree"
                defaultValue={docData.degree}
                variant="outlined"
                onChange={(e)=>changedocData({...docData, degree :e.target.value})}
                />
              </Grid>
              <Grid item xs={2}>
            <TextField
                id="outlined-required"
                label="Specialization"
                defaultValue={docData.specialization}
                variant="outlined"
                onChange={(e)=>changedocData({...docData, specialization :e.target.value})}
                />
              </Grid>
              <Grid item xs={2}>
            <TextField
                id="date"
                label="Start date of practice"
                type="date"
                defaultValue={userData.start_dop}
                onChange={(e)=>changedocData({...docData, start_dop :e.target.value})}
                InputLabelProps={{
                  shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                   
                   <InputLabel htmlFor="isp">Is Private?</InputLabel>
                   <Checkbox
                    value={docData.isPrivate}
                    inputProps={{ id:'isp'}}
                    onChange={(e)=>changedocData({...docData, isPrivate :e.target.value})}
                  />
                
              </Grid>
              <Grid item xs={2}> 
          
              </Grid>
           </Grid>
           <br />
          <Divider />
         <br />
         <Grid container spacing={3}>
         <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Work Street"
                  defaultValue={docData.work_street}
                  variant="outlined"
                  onChange={(e)=>changedocData({...docData, work_street :e.target.value})}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Work City"
                  defaultValue={docData.work_city}
                  variant="outlined"
                  onChange={(e)=>changedocData({...docData, work_city :e.target.value})}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Work State"
                  defaultValue={docData.work_state}
                  variant="outlined"
                  onChange={(e)=>changedocData({...docData, work_state :e.target.value})}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Work Pincode"
                  defaultValue={docData.work_pincode}
                  variant="outlined"
                  onChange={(e)=>changedocData({...docData, work_pincode :e.target.value})}
                />
                </Grid>
                <Grid item xs={2}>
                </Grid>
           
         </Grid>
         <br />
          <Divider />
         <br />

           </div>
           )
         }
         <Button size="large" variant="contained" color="secondary" onClick={updateData}>
                Save
            </Button>
            <br />
            <br />







         

        </div>
            
        </div>
    )
}

export default Home