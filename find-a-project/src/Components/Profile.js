import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Avatar } from '@material-ui/core';


export default function Profile() {
  const state = useSelector((state) => state.profileData);
  console.log(state);
 
  return (
    <Card>
      <CardContent>
        <Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> 
        </Typography>
      </CardContent>
    </Card>
  );
}
