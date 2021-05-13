import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

export default function ProfileSkills() {
    const { userProfile } = useSelector(state => state.profileData);
    const { profile } = userProfile;
    const { skills } = profile;
    const [hashtag, setHashtag] = useState("")
    const [arrayOfHashtags, addHashtag] = useState(skills)

    const handleDelete = (h) => () => {
      addHashtag((arrayOfHashtags) =>
        arrayOfHashtags.filter((hashtag) => hashtag !== h)
      )
    }
    const handleHashtagChange = (event) => setHashtag(event.target.value)
  
  
    const newHashtag = () => {
        addHashtag((arrayOfHashtags) => arrayOfHashtags.concat(hashtag))
     
    }
    const Hashtags = arrayOfHashtags.map((h) => (
      <Chip
        size="small"
        label={h}
        onDelete={handleDelete(h)}
      />
    ))

    return (
        <Paper >
             <TextField
                size="small"
                inputProps={{
                style: { fontSize: 15 },
                }}
                id="outlined-multiline-static"
                multiline
                rows={1}
                placeholder="Description"
                variant="outlined"
                value={hashtag}
                onChange={handleHashtagChange}
            />
        <Button color="primary" onClick={newHashtag}>
            Create!
        </Button>
                { Hashtags }
        </Paper>
    );
}