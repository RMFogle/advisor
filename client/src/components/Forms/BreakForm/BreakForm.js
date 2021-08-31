import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import { createBreak, updateBreak } from '../../../actions/breaks';

const BreakForm = ({ breakId, setBreakId }) => {
    const [postData, setPostData] = useState({ title: '', message: '', notes: '', downloadURL: '' });
    const post = useSelector((state) => breakId ? state.breaks.find((p) => p._id === breakId) : null); 
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(breakId) {
            dispatch(updateBreak(breakId, postData));
        } else {
            dispatch(createBreak(postData));
        }
        clear();
    }

    const clear = () => {
        setBreakId(null);
        setPostData({ title: '', message: '', notes: '', downloadURL: '' })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{ breakId ? 'Edit' : 'Create' } a Card</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Title</InputLabel>
                        <Select
                        native
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        label="Title"
                        inputProps={{
                            name: 'title',
                            id: 'outlined-title-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={"Routine"}>Routine</option>
                        <option value={"Habit"}>Habit</option>
                        <option value={"Tasks"}>Tasks</option>
                        <option value={"Break"}>Break</option>
                        </Select>
                    </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Message</InputLabel>
                        <Select
                        native
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                        label="Message"
                        inputProps={{
                            name: 'message',
                            id: 'outlined-message-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={"Keep Going!"}>Keep Going!</option>
                        <option value={"You Got This!"}>You Got This!</option>
                        <option value={"Stay Focused!"}>Stay Focused!</option>
                        <option value={"Be Patient"}>Be Patient</option>
                        <option value={"You Deserve To Relax"}>You Deserve To Relax</option>
                        <option value={"Let Your Mind Wander"}>Let Your Mind Wander</option>
                        </Select>
                    </FormControl>
            <TextField name="notes" variant="outlined" label="Notes" fullWidth value={postData.notes} onChange={(e) => setPostData({ ...postData, notes: e.target.value })}/>
            <TextField type="url" name="url" variant="outlined" label="uRL (optional)" fullWidth value={postData.downloadURL} onChange={(e) => setPostData({ ...postData, downloadURL: e.target.value })}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    ); 
};

export default BreakForm; 