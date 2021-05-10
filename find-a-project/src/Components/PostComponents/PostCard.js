import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxHeight: 300
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
  },
});

export default function PostCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          The Information Block
        </Typography>
        <Typography variant="h5" component="h2">
          Project Name: Social Digital Platform
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Area: Information Technology
        </Typography>
        <Typography variant="body2" component="p">

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/post/1">Learn More</Button>
      </CardActions>
    </Card>
  );
}
