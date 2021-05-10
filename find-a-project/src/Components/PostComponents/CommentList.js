import React, { useEffect, useState } from 'react'
import Comment from './Comment';

export default function CommentList(props) {
    const [comments, setComments] = useState(props.comments);

    useEffect(() => {
    })
    
    const renderComment = () => {
        const commentsTemplate = comments?.map((comment)=> {
            return <Comment />;
        });

        return commentsTemplate;
    }
    
    return (
        <>
            {renderComment()}
        </>
    )
}
