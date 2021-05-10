import React, { useState } from 'react';
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
    const classes = useStyles();
    const handleChange = (e) => {
        a = e.target.value;
    }
    const handleClick = () => {
        const newObj = { key: skills.length, label: a };
        setSkills([...skills, newObj]);
        console.log(skills);
    }
    var a = "";
    let skill = [{ key: 0, label: "java" }, { key: 1, label: "c" }, { key: 2, label: "c++" }];
    const [skills, setSkills] = React.useState(skill);
    const handleDelete = (e) => () => {
        setSkills((chips) => chips.filter((chip) => chip.key !== e.key));
    }
    return (
        <Paper >
            <TextField
                id="Skills"
                name="Skills"
                label="Skills"
                variant="outlined"
                defaultValue="  "
                onChange={handleChange} 
            />
            <Button variant="contained" onClick={handleClick}>add</Button>

            <Card >
                <CardContent component="ul" className={classes.root}>
                    {
                        skills.map((data) => {
                            let icon;
                            return (
                                <li key={data.key}>
                                    <Chip
                                        icon={icon}
                                        label={data.label}
                                        onDelete={handleDelete(data)}
                                        color="primary"
                                    />
                                </li>
                            );
                        })}
                </CardContent>
            </Card>

        </Paper>
    );
}