import React, { useState, useEffect } from "react";
import { Card, Grid, IconButton, Paper, TextField } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

import { createTodo } from '../../actions/todos';

const TodoForm = ({ taskId, setTaskId }) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)
    const classes = useStyles();
    const [checkData, setCheckData] = useState({ task: '' });
    const check = useSelector((state) => taskId ? state.todos.find((p) => p._id === taskId) : null); 

    useEffect(() => {
        if(check) setCheckData(check);
    }, [check])

    const handleSubmitTask = (e) => {
        e.preventDefault();
        dispatch(createTodo(checkData));
        clearTask();
    }

    const clearTask = () => {
        setCheckData({ task: '' })
    }

    console.log(todos);

    return (
            <Grid className={classes.container} container alignItems="stretch" spacing={6}>
                <Card className={classes.taskcard}>
                <Grid item xs={12} sm={12} md={12}>
                    <div className="">
                        <h2 className={classes.h2}>Task List</h2>
                            <Paper className={classes.paper}>
                                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmitTask}>
                                <TextField name="task" variant="outlined" label="item" className={classes.inputTask} value={checkData.task} onChange={(e) => setCheckData({ ...checkData, task: e.target.value })}/>
                                <Stack spacing={2} direction="row" className={classes.taskButtons}>
                                <IconButton variant="contained" size="medium" type="submit">
                                    <AddCircleOutlineIcon color="primary" fontSize="large" />
                                </IconButton>
                                <IconButton variant="contained" size="medium" onClick={clearTask}>
                                    <HighlightOffIcon color="action" fontSize="large" />
                                </IconButton>
                                </Stack>
                                </form>
                            </Paper>
                    </div>
                </Grid>
                </Card>
            </Grid>
        )
    }

    export default TodoForm;
