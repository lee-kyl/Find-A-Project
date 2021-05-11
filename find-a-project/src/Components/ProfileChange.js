import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import ProfileSkills from "../Components/ProfileSkills";
import { makeStyles } from "@material-ui/core/styles";


export default function Profile() {
  // const skills=["c","c++","java"];
  // const handleSkill=(e)=>{
  //   e.target
  // }
  return (
    <Grid
      container
      flexdirection="column"
      justify="space-around"
      style={{ marginTop: 20 }}
    >
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <form noValidate autoComplete="off">
              <Grid container justify="center">
                <Grid item xs={3}></Grid>
                <Grid item xs={5}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        id="First-Name"
                        name="FirstName"
                        label="First Name"
                        variant="outlined"
                        defaultValue="Kun"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="Last-Name"
                        name="LastName"
                        label="Last Name"
                        variant="outlined"
                        defaultValue="Chen"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="school"
                        name="school"
                        label="School"
                        variant="outlined"
                        defaultValue="UTS"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="major"
                        name="major"
                        label="Major"
                        variant="outlined"
                        defaultValue="IT"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        defaultValue="123@gmail.com"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="phone"
                        name="phone"
                        label="Phone"
                        variant="outlined"
                        defaultValue="123"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="detail"
                        label="Detail"
                        multiline
                        rows={4}
                        defaultValue="Detail"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ProfileSkills></ProfileSkills>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
}
