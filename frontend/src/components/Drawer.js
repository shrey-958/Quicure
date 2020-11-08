import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import profile from './profile.png';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));



const Drawer1 = props => {
  const { history } = props;
  
  const role = 'Doctor'
  const classes = useStyles();
  let itemsList = [
    {
      text: "Home",
      onClick: () => history.push(`/home/${localStorage.getItem("uid")}`)
    },
    {
      text: "Hospitals",
      onClick: () => history.push("/hospitals")
    },
    {
      text: "Bloobanks",
      onClick: () => history.push("/bloodbanks")
    },
    {
      text: "History",
      onClick: () => history.push(`/history/${localStorage.getItem("uid")}`)
    },
    {
      text: "Doctors",
      onClick: () => history.push("/doctors")
    }
  ];
  if(localStorage.getItem("role")==='Doctor') itemsList.push({text:"Appointments", onClick : ()=> history.push(`/appointments`)})

  

  const logoutfun = () => {
    
    localStorage.clear();
   localStorage.setItem("status",0);  
 }
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container>
            <Grid item xs = {2}>
          <Typography variant="h6">
            Quicure.com
          </Typography></Grid>
          <Grid item xs = {9}></Grid>
          <Grid item xs = {1}>
          <Button  onClick = {logoutfun} href = "/" color="inherit">LOGOUT</Button></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
      <Grid container>


        <Grid item xs = {1}></Grid>
        <Grid item xs = {10}>
        <img src = {profile}  style = {{borderRadius:"50%"}} alt="Profile" height = "120px" width = "120p"/>
        </Grid>
<Grid item xs = {1}></Grid>
        </Grid>
        <Grid container>


        <Grid item xs = {1}></Grid>
        <Grid item xs = {10}>
      <Typography align = "center" variant="h6">{localStorage.getItem("fname")} {localStorage.getItem("lname")}</Typography>
        </Grid>
<Grid item xs = {1}></Grid>
        </Grid>
      
        <Divider />
        <List>
        {itemsList.map((item, index) => {
          const { text,  onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>  
        
      </Drawer>
      
    </div>
  );
};

export default withRouter(Drawer1);

