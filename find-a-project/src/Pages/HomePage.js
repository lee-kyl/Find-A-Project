import { Grid } from '@material-ui/core'
import React from 'react'
import InformationBlocks from '../Components/InformationBlocks'
import Profile from '../Components/Profile'
import SearchBar from '../Components/SearchBar'
import Notification from '../Components/Notification'

export default function HomePage() {
    return (
        <>
        <Grid container flexdirection="column" justify="space-around" style={{marginTop: 20}}>
            <Grid item xs={3}>
                <Profile></Profile>
            </Grid>
            <Grid item xs={5} style={{marginLeft: 20, marginRight: 20}}>
                <SearchBar></SearchBar>

                <InformationBlocks></InformationBlocks>
            </Grid>
            <Grid item xs={3}>
                <Notification></Notification>
            </Grid>
        </Grid>
        </>
    )
}
