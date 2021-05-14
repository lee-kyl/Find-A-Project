import { formatMs, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import Profile from '../Components/Profile'
import SearchBar from '../Components/SearchBar'
import Notification from '../Components/Notification'
import PostCardList from '../Components/PostComponents/PostCardList'
import { useDispatch } from 'react-redux';
import { loadProfile } from '../Redux/actions/profile';
import EditPostCard from '../Components/PostComponents/EditPostCard'
import Divider from '@material-ui/core/Divider';


export default function HomePage() {  
    const dispatch = useDispatch();  
    useEffect(async ()=>{
        if(localStorage.getItem('profile')){
        const { result } = JSON.parse(localStorage.getItem('profile'));
        const { _id } = result;
        dispatch(loadProfile(_id));
        }
    },[dispatch]);
    return (
        <>
        <Grid container flexdirection="column" justify="space-around" style={{marginTop: 20, marginBottom: 20}}>
            <Grid item sm={3} xs={10}>
                <Profile></Profile>
            </Grid>
            <Grid item sm={5} xs={10} style={{marginLeft: 20, marginRight: 20}}>
                <EditPostCard></EditPostCard>
                
                <Divider style={{marginTop: 20, marginBottom: 20}}/>

                <PostCardList></PostCardList>
            </Grid>
            <Grid item sm={3} xs={10}>
                <Notification></Notification>
            </Grid>
        </Grid>
        </>
    )
}
