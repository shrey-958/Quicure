import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "150px"
    
  }
});
const uid = 6;


const Drawer = props => {
  const { history } = props;
  const role = 'Doctor'
  const classes = useStyles();
  let itemsList = [
    {
      text: "Home",
      onClick: () => history.push(`/home/${uid}`)
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
      onClick: () => history.push(`/history/${uid}`)
    }
  ];
  if(role==='Doctor') itemsList.push({text:"Appointments", onClick : ()=> history.push(`/appointments/${uid}`)})

  itemsList.push({
    text: "Logout",
    onClick: () => {
      localStorage.clear();
      history.push("/")
    } 
  })

  return (
    <MUIDrawer variant="permanent" className={`${classes.drawer} `}>
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
    </MUIDrawer>
  );
};

export default withRouter(Drawer);