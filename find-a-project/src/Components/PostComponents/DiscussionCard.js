import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from  '../Image';
import { Avatar, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxHeight: 300,
    marginTop: 20,
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
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
});

export default function DiscussionCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardHeader 
        avatar={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
        title={props.post?.title}
    />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.post?.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/post/${props.post?._id}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
