import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));


export default function SvgIconsColor() {
    const classes = useStyles();
    const handleSetting = () => {
    window.location.href = "/Setting";
  };

  return (
    <div className={classes.root}>
      <SettingsIcon color="primary" onClick={handleSetting}/>
    </div>
  );
}