import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import ProfilePage from "../Components/ProfilePage";
import ProfileSkills from "../Components/ProfileSkill";
import ProfileApplication from "../Components/ProfileApplication";
import ProfileRecentActivity from "../Components/ProfileRecentActivity";
import ProfileTeam from "../Components/ProfileTeam";
import ProfilePlan from "../Components/ProfilePlan";
import { loadProfile } from '../Redux/actions/profile';


export default function HomePage() {
  const dispatch = useDispatch();  
  const { id } = useParams();
  useEffect(async ()=>{
      if(localStorage.getItem('profile')){
      const { result } = JSON.parse(localStorage.getItem('profile'));
      const { _id } = result;
        if(id){
          dispatch(loadProfile(id));
        }else{
          dispatch(loadProfile(_id));
        }
      }
  },[dispatch]);
  return (
    <>
      <Grid
        container
        flexdirection="column"
        justify="space-around"
        style={{ marginTop: 20 }}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={9}>
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
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
}
