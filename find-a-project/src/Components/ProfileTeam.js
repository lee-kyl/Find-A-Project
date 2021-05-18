import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getTeam } from '../Redux/actions/team';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const { result } = JSON.parse(localStorage.getItem('profile'));
  const id = result._id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeam(id))
  }, []);

  const { team } = useSelector(state => state.teamData);
  const { members,teamName } = team;
  const membersItems = members.map((item)=>{
    const { firstName, lastName } = item;
    return(
      <>
        <Divider />
          <ListItem >
            <ListItemText primary={ firstName + " " + lastName } />
          </ListItem>
        <Divider />
      </>
    );
  });
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
            { teamName }
          </Typography>
        </ListItemText>
      </ListItem>
      { membersItems }
    </List>
    </CardContent>
  </Card>
   
  );
}