import React from 'react';
import PostCard from './PostCard';
import { Chip } from '@material-ui/core';

export default function ProjectCard(props) {
  return (
    <PostCard post={props.post}>
        <Chip variant="outlined" label={`Slot: ${props.post?.addition?.slot}`} />
        <Chip variant="outlined" label={`Faculty: ${props.post?.addition?.school}`} />
        <Chip variant="outlined" label={`Area: ${props.post?.addition?.major}`} />
    </PostCard>
  );
}
