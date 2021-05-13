import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Notification() {
  const classes = useStyles();
  return (
    <div>
    <Card>
      <CardContent>
        <Typography>
          Recnt project
        </Typography>
        <List className={classes.root}>
          <ListItem>
            <ListItemText primary="Social Digital Platform(SDP)." secondary="2d ago·20 readers" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Disscussion about how to find a project." secondary="3d ago·80 readers" />
          </ListItem>

          <ListItem>
            <ListItemText primary="A game develop on IOS" secondary="5d ago·200 readers" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
    <p></p>
    <Card>
      <CardContent>
        <Typography>
          Recent disscussion
        </Typography>
        <List className={classes.root}>
          <ListItem>
            <ListItemText primary="Dragon-wings Team need teammates!" secondary="Created by Nico" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Old fish Team need teammates!" secondary="Created by Oldfish" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Anyone interested in IOS?" secondary="Created by Mike" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
    </div>
  );
}
