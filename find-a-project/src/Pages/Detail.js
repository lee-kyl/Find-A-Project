import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Content from '../Components/DetailPageComponents/Content';
import Project from '../Components/DetailPageComponents/Project';
import TeamUp from '../Components/DetailPageComponents/TeamUp';
import { makeStyles } from '@material-ui/core/styles';
import { loadPost } from '../Redux/actions/post';


const useStyle = makeStyles(() => ({
    root:{
        display:"flex"
    }

}));

export default function DetailPage(props){
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);
    useEffect( async () => {
        dispatch(loadPost(id));
    }, [dispatch])
    
    const { postData } = useSelector(state => state.postData)
    const { type } = postData;
    const classes = useStyle();
    return(

        <div className={classes.root}>
            <Content />
            { type === 'Project' ? <Project /> : null }
            { type === 'TeamUp' ? <TeamUp /> : null }    
        </div>

    );
}