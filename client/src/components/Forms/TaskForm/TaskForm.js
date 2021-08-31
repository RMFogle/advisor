import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import { createTodo, updateTodo } from '../../../actions/todos';

const TaskForm = ({ taskId, setTaskId }) => {
    const [checkData, setCheckData] = useState({ task: '', completed: '' });
    const check = useSelector((state) => taskId ? state.todos.find((p) => p._id === taskId) : null); 
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(check) setCheckData(check);
    }, [check])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(taskId) {
            dispatch(updateTodo(taskId, checkData));
        } else {
            dispatch(createTodo(checkData));
        }
        clear();
    }

    const clear = () => {
        setTaskId(null);
        setCheckData({ task: '', completed: '' })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{ taskId ? 'Editing' : 'Creating' } a Task</Typography>
            <TextField name="task" variant="outlined" label="Task" fullWidth value={checkData.task} onChange={(e) => setCheckData({ ...checkData, task: e.target.value })}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    ); 
};

export default TaskForm; 