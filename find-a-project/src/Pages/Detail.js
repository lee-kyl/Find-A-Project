import React from 'react';
import Content from '../Components/DetailPageComponents/Content';
import Project from '../Components/DetailPageComponents/Project';
import TeamUp from '../Components/DetailPageComponents/TeamUp';

export default function DetailPage(props){
    return(
        <>
        <Content />
        <Project />
        <TeamUp />
        </>
    );
}