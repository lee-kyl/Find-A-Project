import React from 'react';
import Content from '../Components/DetailPageComponents/Content';
import Project from '../Components/DetailPageComponents/Project';
import TeamUp from '../Components/DetailPageComponents/TeamUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
    root:{
        display:"flex"
    }

}));

export default function DetailPage(props){
    const classes = useStyle();
    return(

        <div className={classes.root}>
            <Content />
            <Project />
            <TeamUp />
        </div>

    );
}