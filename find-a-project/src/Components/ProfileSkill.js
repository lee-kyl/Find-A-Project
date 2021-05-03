import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export default function Profile() {
    const classes = useStyles();
    const handleDelete = () => {
    console.info('222');
 };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <Card>
    <CardContent>
    <Typography variant="h5" component="h2">
       Skills
    </Typography>
    <div className={classes.root}>
    <Chip label="Deletable primary"  color="primary" />
    <Chip label="Deletable primary"  color="primary" />
    <Chip label="Deletable primary"  color="primary" />
    <Chip label="Deletable primary"  color="primary" />
    <Chip label="Deletable primary"  color="primary" />
    <Chip label="Deletable primary"  color="primary" />
    <Chip label="Deletable primary"  color="primary" />
    </div>
    </CardContent>
  </Card> 
  );
}