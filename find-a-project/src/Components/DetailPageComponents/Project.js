import React from 'react';
import { useSelector } from 'react-redux';
import {
        Card,
        Divider,
        Typography,
        Button,
        Avatar
       }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    root:{
        margin:35,
        maxWidth:250,
        maxHeight:650,
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        padding:35
    },
    potrait:{
        width:theme.spacing(15),
        height: theme.spacing(15)
    },
    button:{
        paddingLeft:30,
        paddingRight:30
    }

}));

export default function Project(){
    const classes = useStyle();
    const { postData } = useSelector(state => state.postData);
    const { author } = postData;
    const { firstName,lastName,email } = author;
    return(
        <>
        <Card className={classes.root}>
            <Avatar className={classes.potrait}>{firstName[0].toUpperCase()}</Avatar>
            <Typography variant="h5">{firstName + "" + lastName}</Typography>
            <Typography variant="body1">
                Contact:<br />
                { email }
            </Typography>
            <Divider variant="middle"/>
            <Button fullWidth variant="outlined" color="primary" href="#">APPLY</Button>
        </Card>
        </>
    );
}