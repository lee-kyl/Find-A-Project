import { formatMs, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import Profile from '../Components/Profile'
import SearchBar from '../Components/SearchBar'
import Notification from '../Components/Notification'
import PostCardList from '../Components/PostComponents/PostCardList'
import { useDispatch } from 'react-redux';
import { loadProfile } from '../Redux/actions/profile';

export default function HomePage() {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(localStorage.getItem('profile')){
        const { result } = JSON.parse(localStorage.getItem('profile'));
        console.log(result);
        const { _id } = result;
        console.log(_id);
        dispatch(loadProfile(_id));
        }
    },[]);
    
    return (
        <>
        <Grid container flexdirection="column" justify="space-around" style={{marginTop: 20, marginBottom: 20}}>
            <Grid item xs={3}>
                <Profile></Profile>
            </Grid>
            <Grid item xs={5} style={{marginLeft: 20, marginRight: 20}}>
                <PostCardList></PostCardList>
            </Grid>
            <Grid item xs={3}>
                <Notification></Notification>
            </Grid>
        </Grid>
        </>
    )
}
