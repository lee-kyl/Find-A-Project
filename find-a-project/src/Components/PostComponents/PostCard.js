import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, Chip, Grid } from '@material-ui/core';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxHeight: 300,
    marginBottom: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
});

const colorMap = {
  'Discussion' : {backgroundColor: '#256EFF'},
  'TeamUp' : {backgroundColor: '#A481DA'},
  'Project' : {backgroundColor: '#3DDC97'}
}

const iconMap = {
  'Discussion' : <QuestionAnswerOutlinedIcon></QuestionAnswerOutlinedIcon>,
  'TeamUp' : <GroupAddOutlinedIcon></GroupAddOutlinedIcon>,
  'Project' : <AssignmentOutlinedIcon></AssignmentOutlinedIcon>
}

export default function PostCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardHeader
        avatar={<Avatar>P</Avatar>}
        title={props.post?.title}
        style={{...colorMap[props.post?.type], color: 'white', font: 'bold'}}
        action={iconMap[props.post?.type]}
    />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.pos}>
            {props.post?.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justify="space-between">
        <Grid item xs={3}>
          <Button size="small" href={`/post/getPost/${props.post?._id}`}>Learn More</Button>
        </Grid>
        <Grid item xs={8}>
          {props.children}
        </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
