import React from 'react';
import {  
    Card,
    TextField,
    Avatar,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Button,
    Chip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    root: {
        margin: 35,
        maxWidth: 800,
        padding: 10
    },
    potrait:{
        width:theme.spacing(3),
        height: theme.spacing(3)
    },
    reply:{
        
        paddingLeft:15
    },
    tag:{
        marginLeft: 15
    },
    submit:{
        marginTop:5,
        marginBottom:5
    }

}));

export default function CommentBlock(){
    const classes = useStyle();
    return(
        <Card className={classes.root}>
            <Typography variant="h5">Comments:</Typography>
            <TextField fullWidth multiline label="Comment Here" rows={4} variant="outlined" />
            <Button classes={classes.submit} fullWidth variant="contained" color="primary" >SUBMIT COMMENT</Button>
            <Card>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.potrait}>U</Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography variant="h7">
                            USERNAME
                        </Typography>    
                        <Chip className={classes.tag} variant="outlined" label="Student" color="primary"/>
                    </ListItemText>
                </ListItem>
                <Typography className={classes.reply} variant="body1">
                    Some Reply
                    <Button variant="text" color="secondary">DELETE</Button>
                </Typography>

            </List>
            </Card>
        </Card>
    );
}