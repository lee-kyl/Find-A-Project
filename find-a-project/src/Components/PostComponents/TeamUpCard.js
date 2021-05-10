import { Chip } from '@material-ui/core';
import React from 'react';
import PostCard from './PostCard';

export default function TeamUpCard(props) {
  return (
    <PostCard post={props.post}>
      <Chip variant="outlined" label={`Team: ${props.post?.addition?.team}`} />
    </PostCard>
  );
}
