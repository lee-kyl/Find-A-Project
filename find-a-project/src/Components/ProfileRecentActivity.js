import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { loadRecent } from '../Redux/actions/recentActivity';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { result } = JSON.parse(localStorage.getItem('profile'));
  const id = result._id
  useEffect(() => {
    dispatch(loadRecent(id));
  }, []);
  const { activities } = useSelector(state => state.activitiesData);
  const activityItems = activities.map((item)=>{
    const { content,createdAt } = item;
    return(
      <ListItem>
        <ListItemText primary={"\"" + content + "\""} secondary= {"\"" + createdAt + "\""} />
      </ListItem>
    );
  });

  return (
    <Card>
    <CardContent>
    <Typography variant="h5" component="h2">
       Recent Activities
    </Typography>
    <List className={classes.root}>
      { activityItems }
{/*       
      <Divider variant="inset" component="li" />
      <ListItem>    
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem> */}
    </List>
    </CardContent>
  </Card> 
    
  );
}