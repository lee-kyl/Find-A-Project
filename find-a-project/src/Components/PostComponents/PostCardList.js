import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

export default function PostCardList() {
    const fetchData = async (url) => {
        // const response = await fetch(url);
        // let data = await response.json();
        // return data;
        // TODO: replace mock function
        return mockAPICall();
    }

    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    })

    // Mock API call
    const mockAPICall = () => new Promise(resolve => setTimeout(resolve, 2000));

    const getData = () => {
        return fetchData('').then((result) => {
            setPostList([{id: 1}, {id: 2}])
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
                case 'project': return <PostCard></PostCard>;
                default:
                    return <PostCard></PostCard>;
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
