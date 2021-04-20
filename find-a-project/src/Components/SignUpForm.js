import React from 'react';
import { Avatar,
         Button, 
         TextField,
         Grid, 
         Typography, 
         Container,
         Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const handleSignUp = () => {

}

export const SignUpForm = () => {
    const classes = useStyles();

    return (
        <Container className={classes.spacing} component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={1}>
            <Typography variant="h4">
                Sign Up
            </Typography>
            <div className={classes.avatarPadding}>
            <Avatar className={classes.avatar}>U</Avatar>
            </div>
            <form onSubmit={handleSignUp}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                            id="email" 
                            name="email"
                            label="Email" 
                            type="email"
                            variant="outlined"
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            id="firstname"
                            name="firstname" 
                            label="First Name" 
                            variant="outlined"
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            id="lastname" 
                            name="lastname"
                            label="Last Name" 
                            variant="outlined"
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="school-id" 
                            name="school-id"
                            label="School ID" 
                            variant="outlined"
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="password"
                            name="password" 
                            label="Password" 
                            type="password"
                            variant="outlined"
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            id="re-enter-password"
                            name="re-enter-password" 
                            label="Re-enter Password" 
                            type="password"
                            variant="outlined"
                            fullWidth 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                        Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </Container>
    )
}
