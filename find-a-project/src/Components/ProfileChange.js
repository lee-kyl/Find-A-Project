import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Image from  '../Components/Image'
import ProfileInformation from '../Components/ProfileInformation'
import Contact from '../Components/Contact'
export default function Profile() {
  return (
    <Card>
      <CardContent>
        <Typography>
            <Image></Image>
            <ProfileInformation> </ProfileInformation>
            <Contact></Contact>
        </Typography>
      </CardContent>
    </Card>
  );
}
