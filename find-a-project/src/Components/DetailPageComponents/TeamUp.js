import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { 
    Card,
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { loadTeam, updateTeam } from '../../Redux/actions/team';

const useStyle = makeStyles(() => ({
    root: {
        margin:35,
        padding:20,
        maxWidth:250,
        maxHeight:650
    }

}));

export default function TeamUp(){
    let isJoined = false;
    let isLogged = false;
    const classes = useStyle();
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(loadTeam(id));
    }, [dispatch]);
    const { team } = useSelector(state => state.teamData);
    let members;
    if(team.members !== null){
        members = team.members;
    }
    let user;
    if(localStorage.getItem('profile')){
        const { result } = JSON.parse(localStorage.getItem('profile'));
        user = result._id;
        isLogged = true;
    }

    const handleButton = () => {
        if(localStorage.getItem('profile')){
            const { result } = JSON.parse(localStorage.getItem('profile'));
            const userId = result._id;
            const body = { userId: userId };
            console.log(body);
            dispatch(updateTeam(id,body));
        }
    }
    //const { members } = team;
    
    const teamMembers = members.map((item) => {
        const { _id,firstName, lastName } = item;
        if(_id === user){
            isJoined = true;
        }
        return(
            <>
            <Divider variant="middle"/>
            <ListItem>
                    <ListItemAvatar>
                        <Avatar>{firstName[0].toString()}</Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography variant="h7">{ firstName + " " + lastName }</Typography>
                    </ListItemText>
                </ListItem>
            <Divider variant="middle"/>
            </>
        );
    })
    return (
        <>
        <Card className={classes.root}>
            <List>
                {/* <ListItem>
                    <ListItemAvatar>
                        <Avatar>U</Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography variant="h7">NAME</Typography>
                    </ListItemText>
                </ListItem>
                <Divider variant="middle"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>U</Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography variant="h7">NAME</Typography>
                    </ListItemText>
                </ListItem>
                <Divider variant="middle"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>U</Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography variant="h7">NAME</Typography>
                    </ListItemText>
                </ListItem>
                <Divider variant="middle"/> */}

                { members !== null? teamMembers : null }
                { members.length >= 3 || isJoined === true || isLogged === false ? null :
                <ListItem>
                    <Button fullWidth variant="outlined" color="secondary" onClick={handleButton}>+</Button>
                </ListItem>
                }
            </List>
        </Card>
        </>
    );
}