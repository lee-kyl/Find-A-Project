import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    info:
    {
        fontSize: 15
    }
});
export default function ProfileInformation() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <p></p>
          <Typography variant="h6" component="h2">
            User1
          </Typography>
          <Typography className={classes.info}  variant="h6" component="h2">
            University of Technology Sydney 
          </Typography>
          </div>
    );
  }