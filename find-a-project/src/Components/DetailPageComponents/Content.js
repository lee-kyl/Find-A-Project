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
import { useSelector } from 'react-redux';
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
    const { postData } = useSelector(state => state.postData);
    const { title,createdAt,userType,content,type,author } = postData;
    const { firstName,lastName } = author;
    const classes = useStyles();
    return (
        <div>
        <Card className={classes.root}>
            <div className={classes.header}>
            <Typography variant="h4">
                { title }
            </Typography>
            { iconMap[type] }
            </div>
            <Typography variant="overline">
                { createdAt + "  " + firstName + " " + lastName } 
            </Typography>  
            <Divider />
            <Typography variant="body1" gutterBottom>
                { content }
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