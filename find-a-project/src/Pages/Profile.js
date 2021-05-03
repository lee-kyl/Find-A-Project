import { Grid } from '@material-ui/core';
import React from 'react';
import InformationBlocks from '../Components/InformationBlocks';
import Profile from '../Components/Profile';
import SearchBar from '../Components/SearchBar';
import ProfilePage from "../Components/ProfilePage";
import ProfileSkills from "../Components/ProfileSkill";
import ProfileApplication from "../Components/ProfileApplication";
import ProfileRecentActivity from "../Components/ProfileRecentActivity";
export default function HomePage() {
    return (
        <>
        <Grid container flexdirection="column" justify="space-around" style={{marginTop: 20}}>
            <Grid item xs={5}>
                <ProfilePage></ProfilePage>
                <p></p>
                <ProfileSkills></ProfileSkills>
                <p></p>
                <ProfileApplication></ProfileApplication>
                <p></p>
                <ProfileRecentActivity></ProfileRecentActivity>
            </Grid>
            <Grid item xs={6} style={{marginLeft: 10, marginRight: 10}}>
                <SearchBar></SearchBar>

                <InformationBlocks></InformationBlocks>
            </Grid>
        </Grid>
        </>
    )
}
