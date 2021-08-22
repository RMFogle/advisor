import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import useStyles from './styles';
// import { createTask, updateTask } from '../../../actions/tasks';

const TaskForm = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ title: '', checklist: '', notes: '' });
    const post = useSelector((state) => currentId ? state.habits.find((p) => p._id === currentId) : null); 
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if(currentId) {
    //         dispatch(updateHabit(currentId, postData));
    //     } else {
    //         dispatch(createHabit(postData));
    //     }
    //     clear();
    // }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', checklist: '', notes: '' })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={""}>
            <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } a Task</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            <TextField name="checklist" variant="outlined" label="Checklist" fullWidth value={postData.checklist} onChange={(e) => setPostData({ ...postData, checklist: e.target.value })}/>
            <TextField name="notes" variant="outlined" label="Notes" fullWidth value={postData.notes} onChange={(e) => setPostData({ ...postData, notes: e.target.value })}/>
            {/* Timer input/selector goes here or perhaps place above the form as an icon off to the right of the paper/card? */}
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    ); 
};

export default TaskForm; 