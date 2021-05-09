import React from 'react'
import CommentList from './CommentList'

export default function PostDetail() {
    return (
        <>
            <CommentList comments={[1,2]}></CommentList>
        </>
    )
}
