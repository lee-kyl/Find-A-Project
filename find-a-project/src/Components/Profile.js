import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Avatar, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root:{
      width: theme.spacing(7),
      height: theme.spacing(7)  
    }
}));


export default function Profile() {
  const classes = useStyles();
  const state = useSelector(state => state.profileData);
  const { firstName,lastName,profile } = state.userProfile;
  const { school, major} = profile;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Hello!<br /> { firstName+" "+lastName }
        </Typography>
        <Divider variant="middle" />
        <Avatar className={classes.root} >{ firstName[0].toString() }</Avatar> 
        <Divider variant="middle" />
        <Typography variant="h6">
          {school + " | " + major}
        </Typography>
      </CardContent>
    </Card>
  );

}
