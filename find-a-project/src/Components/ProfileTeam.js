import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <Card>
    <CardContent>
    <Typography variant="h5" component="h2">
       Team Information
    </Typography>
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        <ListItemText  >
        <Typography variant="h6" component="h2">
       Team Name
    </Typography>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem >
        <ListItemText primary="M2" />
      </ListItem>
      <Divider />
      <ListItem >
        <ListItemText primary="M3" />
      </ListItem>
      <Divider />
      <ListItem >
        <ListItemText primary="M4" />
      </ListItem>
      <Divider />
    </List>
    </CardContent>
  </Card>
   
  );
}