import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Profile() {
  const classes = useStyles();
  const { userProfile } = useSelector(state => state.profileData);
  const { profile } = userProfile;
  let skills;
  if (profile) {
      skills = profile.skills;
  }
  const skillItems = skills?.map((item) => (
    <Chip label={item}  color="primary" />
  ));
  return (
    <Card>
    <CardContent>
    <Typography variant="h5" component="h2">
       Skills
    </Typography>
    <div className={classes.root}>
      {skillItems}
    {/* <Chip label={}  color="primary" /> */}
    </div>
    </CardContent>
  </Card> 
  );
}