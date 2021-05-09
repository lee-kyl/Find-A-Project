import { Grid } from '@material-ui/core'
import React from 'react'
import PostDetail from '../Components/PostComponents/PostDetail'
import Profile from '../Components/Profile'

export default function PostPage() {
    return (
        <>
            <Grid container flexdirection="column" justify="space-around" style={{marginTop: 20}}>
                <Grid item xs={3}>
                    <Profile></Profile>
                </Grid>
                <Grid item xs={8} style={{marginLeft: 20, marginRight: 20}}>
                    <PostDetail></PostDetail>
                </Grid>
            </Grid>
        </>
    )
}
