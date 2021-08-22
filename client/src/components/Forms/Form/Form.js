import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import { createRoutine, updateRoutine } from '../../../actions/routines';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ title: '', message: '', notes: '', checklist: '', downloadURL: '', timer: '' });
    const post = useSelector((state) => currentId ? state.routines.find((p) => p._id === currentId) : null); 
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateRoutine(currentId, postData));
        } else {
            dispatch(createRoutine(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', message: '', notes: '', checklist: '', downloadURL: '', timer: '' })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } a Routine</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
            <TextField name="notes" variant="outlined" label="Notes" fullWidth value={postData.notes} onChange={(e) => setPostData({ ...postData, notes: e.target.value })}/>
            <TextField name="checklist" variant="outlined" label="Checklist" fullWidth value={postData.checklist} onChange={(e) => setPostData({ ...postData, checklist: e.target.value })}/>
            <TextField name="url" variant="outlined" label="URL" fullWidth value={postData.downloadURL} onChange={(e) => setPostData({ ...postData, downloadURL: e.target.value })}/>
            {/* Timer input/selector goes here or perhaps place above the form as an icon off to the right of the paper/card? */}
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    ); 
};

export default Form; 