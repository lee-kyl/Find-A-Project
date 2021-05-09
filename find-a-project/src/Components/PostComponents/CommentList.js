import React, { useEffect, useState } from 'react'

export default function CommentList(props) {
    const [comments, setComments] = useState(props.comments);

    useEffect(() => {
    })
    
    const renderComment = () => {
        const commentsTemplate = comments?.map((comment)=> {
            return <p>Comment: {comment}</p>;
        });

        return commentsTemplate;
    }
    
    return (
        <>
            {renderComment()}
        </>
    )
}
