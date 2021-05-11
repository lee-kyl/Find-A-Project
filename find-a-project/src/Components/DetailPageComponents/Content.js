import React from 'react';
import { 
        Divider, 
        Typography,
        Card,
        TextField        
       } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CommentBlock from '../CommentBlock';
const useStyles = makeStyles(() => ({  
    root: {
        margin: 35,
        maxWidth: 800,
        padding: 10
    },
    header: {
        display:"flex"
    },

    Typography:{
        marginLeft: 10
    },
    flat:{
        display:"flex",
        flexDirection:"column"
    }

}));

const iconMap = {
    "Discussion": <QuestionAnswerOutlinedIcon />,
    "Project": <AssignmentOutlinedIcon />,
    "TeamUp": <GroupAddOutlinedIcon />
}


export default function Content(props) {
    const classes = useStyles();
    return (
        <div>
        <Card className={classes.root}>
            <div className={classes.header}>
            <Typography variant="h4">
                THIS IS THE TITLE
            </Typography>
            { iconMap[props.post?.type] }
            </div>
            <Typography variant="overline">
                date dd:mm:yyyy
            </Typography>  
            <Divider />
            <Typography variant="body1" gutterBottom>
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
                Lorem ipsum....
            </Typography>
        </Card>
        <CommentBlock />
        {/* <Card className={classes.root}>
            <Typography variant="h5">Comments:</Typography>
            <TextField fullWidth multiline label="Comment Here" rows={4} variant="outlined" />
            <Divider />
            <p>replies here</p>
        </Card> */}
        </div> 
    );
}