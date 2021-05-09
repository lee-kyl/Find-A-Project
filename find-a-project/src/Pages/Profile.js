import { Grid } from "@material-ui/core";
import React from "react";
import ProfilePage from "../Components/ProfilePage";
import ProfileSkills from "../Components/ProfileSkill";
import ProfileApplication from "../Components/ProfileApplication";
import ProfileRecentActivity from "../Components/ProfileRecentActivity";
import ProfileTeam from "../Components/ProfileTeam";
import ProfilePlan from "../Components/ProfilePlan";
export default function HomePage() {
  return (
    <>
      <Grid
        container
        flexdirection="column"
        justify="space-around"
        style={{ marginTop: 20 }}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={5}>
          <Grid container flexdirection="column" justify="space-around">
            <Grid item xs={6}>
              <ProfilePage></ProfilePage>
              <p></p>
              <ProfileSkills></ProfileSkills>
              <p></p>
              <ProfileApplication></ProfileApplication>
              <p></p>
              <ProfileRecentActivity></ProfileRecentActivity>
            </Grid>

            <Grid item xs={4}>
              <ProfileTeam></ProfileTeam>
              <p></p>
              <ProfilePlan></ProfilePlan>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}
