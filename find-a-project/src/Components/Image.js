import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    title: {
        fontSize: 14,
      },
  }));

export default function ImageAvatars() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Typography variant="h5" component="h2">
        Profile
    </Typography>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> 
    </div>
  );
}
