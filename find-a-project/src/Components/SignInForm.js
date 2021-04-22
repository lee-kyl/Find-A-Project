import React, { useState } from 'react';
import {
        Avatar,
        Grid,
        TextField,
        Button,
        Container,
        Typography,
        Paper
        } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const initialState = {
    email: '',
    password: ''
}

const useStyles = makeStyles((theme) => ({
    spacing: {
        padding: theme.spacing(2)
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        alignItems: 'center'
    },
    avatar:{
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    avatarPadding: {
        padding: theme.spacing(2)
    }
}))


export const SignInForm = () => {
    const classes = useStyles();

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(formData);
    }    

    return (
        <Container className={classes.spacing} component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={1}>
            <Typography className={classes.spacing} variant="h4">
                Sign In
            </Typography>
            <div className={classes.avatarPadding}>
            <Avatar className={classes.avatar}>U</Avatar>
            </div>
            <form onSubmit={handleSignIn}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="email" 
                            name="email"
                            label="Email" 
                            type="email"
                            variant="outlined"
                            fullWidth
                            onChange = {handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            onChange = {handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </Container>
    )
}
