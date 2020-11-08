import React,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const axios = require('axios');
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Quicure
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://agentpekka.com/wp-content/uploads/2017/10/AP_Rune_Fisker_wordpositive_2_2x.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  

function Login(){

    const classes = useStyles();

    const [email1,setEmail1] = React.useState('');
    const [password1,setPassword1] = React.useState('');
    const [emailValid,setEmailValid] = React.useState(0);
    const [passValid,setPassValid] = React.useState(0);
    const [emailTouched,setEmailTouched] = React.useState(0);
    const [passTouched,setPassTouched] = React.useState(0);
    const [detailWrong,setDetailWrong] = React.useState('');
    const [success,setSuccess] = React.useState(0);
    const [data,setData] = React.useState([]);


    const handleEmailChange = (event) =>{
        
      setEmail1(event.target.value);
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email1))
      {
          setEmailValid(0);
      }
      else
      {
          setEmailValid(1);
      }
      

  }

  const handleEmailBlur = () =>{
      
      setEmailTouched(1);
   
  }
  const handlePassChange = (event) =>{
      setPassword1(event.target.value);
      if(password1.length < 8)
      setPassValid(0);
      else 
      setPassValid(1);
  }
  const handlePassBlur = () => {
      setPassTouched(1);

  }
  const loginHandler = (event) =>{
      
      event.preventDefault();
     

      axios.post('http://localhost:5000/api/users/auth/login',{
        email:email1,
        password:password1
      })  
      
      .then(function(response){
      console.log(response.data);

      if(response.data.success == 1)
      {  
      console.log("Login Successful");
      console.log(response.data.data);
      var auth = response.data.token;
      localStorage.setItem("token",auth);
      localStorage.setItem("status",1);
      localStorage.setItem("uid",response.data.data.uid);
      localStorage.setItem("role",response.data.data.role);
      localStorage.setItem("fname",response.data.data.fname);
      localStorage.setItem("lname",response.data.data.lname);
      localStorage.setItem("blood_group",response.data.data.blood_group);
      console.log(localStorage.getItem("status"));
      if(!localStorage.getItem("token"))
      {
        setDetailWrong("The Email and Password entered dont match!");
      }
   
      else
      {
        setDetailWrong("");
        window.location.reload();
      }
     
     

      }
      else if(response.data.success == 0)
      {
        localStorage.setItem("status",0);
        setDetailWrong("The Email and Password entered dont match!");
        console.log(localStorage.getItem("status"));
      }

      
      }).catch(function (error) {
          console.log("Invalid Request");
          setDetailWrong("User Not Found!");
        });
     
    
    
      
  
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit = {loginHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value = {email1}
              autoComplete="off"
              autoFocus
              
              onBlur = {handleEmailBlur}
              onChange = {handleEmailChange}
            />
            {emailTouched === 0 ? <p></p> : (email1.length > 0 && emailValid === 1 ? <p></p>:<p style = {{color:"red"}}>Please enter a valid email id!</p>)}
             
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value = {password1}
              autoComplete="off"
              
              onBlur = {handlePassBlur}
              onChange = {handlePassChange}
            />
            {passTouched === 0 ? <p></p> : (password1.length > 0 && passValid === 1 ? <p></p>:<p style = {{color:"red"}}>Please enter a valid password!</p>)}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
            
          >
            Submit
          </Button>
          <p  style = {{color:"red"}}> {detailWrong}</p>   
            
            
            <Grid container>
              
              <Grid item>
              Don't have an account?&nbsp;
  <Link onMouseDown={event =>  window.location.href='/register'} >
                  Register
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login