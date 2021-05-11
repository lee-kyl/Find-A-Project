import React from 'react';
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

const useStyle = makeStyles(() => ({
    root: {
        margin:35,
        padding:20,
        maxWidth:250,
        maxHeight:650
    }

}));

export default function TeamUp(){
    const classes = useStyle();
    return (
        <>
        <Card className={classes.root}>
            <List>
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
                    <Button fullWidth variant="outlined" color="secondary">+</Button>
                </ListItem>
            </List>
        </Card>
        </>
    );
}