import React from 'react';
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
        width:theme.spacing(7),
        height: theme.spacing(7)
    },
    button:{
        paddingLeft:30,
        paddingRight:30
    }

}));

export default function Project(){
    const classes = useStyle();

    return(
        <>
        <Card className={classes.root}>
            <Avatar className={classes.potrait}>U</Avatar>
            <Typography variant="h5">Sup_NAME</Typography>
            <Typography variant="body1">
                Supervisor Info
                blabla
                blabla
                blablabla
                blablabla
                bla
            </Typography>
            <Divider variant="middle"/>
            <Button fullWidth variant="outlined" href="#">APPLY</Button>
        </Card>
        </>
    );
}