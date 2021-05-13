import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Avatar } from '@material-ui/core';

export default function Profile() {
  const state = useSelector(state => state.profileData);
  const { firstName,lastName } = state.userProfile;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Hello!<br /> { firstName+" "+lastName }
        </Typography>
        <Typography>

        </Typography>
        <Avatar>{ firstName[0].toString() }</Avatar> 
      </CardContent>
    </Card>
  );

}
