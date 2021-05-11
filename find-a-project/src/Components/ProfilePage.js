import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfileSettings from '../Components/ProfileSettings'
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxHeight: 300
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    info:
    {
        fontSize: 15
    }
});
export default function ProfilePage() {
   const classes=useStyles();
    return (
    <Card>
      <CardContent>
      <ProfileSettings></ProfileSettings>
        <Typography>
        <Typography variant="h5" component="h2">
          Profile
        </Typography>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> 
            <Typography variant="h6" component="h2">
            User1
            </Typography>
            <Typography  className={classes.info}     variant="h6" component="h2">
            Major
            </Typography>
            <Typography className={classes.info} variant="h6" component="h2">
            Phone
           </Typography>
           <Typography className={classes.info} variant="h6" component="h2">
            Email
           </Typography>
           <Typography className={classes.info} variant="h6" component="h2">
            Detail
           </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}