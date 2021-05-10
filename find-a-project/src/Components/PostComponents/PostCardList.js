import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import DiscussionCard from './DiscussionCard';
import ProjectCard from './ProjectCard'
import TeamUpCard from './TeamUpCard';

export default function PostCardList() {
    const fetchData = async (url) => {
        const response = await fetch(url);
        let data = await response.json();
        return data;
    }

    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    })

    const getData = () => {
        return fetchData('http://localhost:5000/post/getPosts').then((result) => {
            setPostList(result)
            setIsLoading(false)
        }).catch((err) => {
            setPostList([])
            setIsLoading(true)
        });
    }

    const renderLoadingSpinner = () => <LinearProgress style={{marginTop: 50}}/>

    const renderPost = () => {
        const posts = postList?.map(post => {
            switch(post.type) {
                case 'Project': return <ProjectCard post={post}></ProjectCard>;
                case 'Discussion': return <DiscussionCard post={post}></DiscussionCard>;
                case 'TeamUp': return <TeamUpCard post={post}></TeamUpCard>;
                default:
                    return <></>;
            }
        });

        return <>{posts}</>
    }

    return (
        <>
            {isLoading ? renderLoadingSpinner() : renderPost()}
        </>
    )
}
