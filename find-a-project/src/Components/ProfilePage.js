import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Image from  '../Components/Image';
import ProfileInformation from '../Components/ProfileInformation';
import { makeStyles } from '@material-ui/core/styles';
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
        <Typography>
            <Image></Image>
            <ProfileInformation> </ProfileInformation>
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