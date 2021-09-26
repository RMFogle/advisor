import React, { useState, useEffect } from "react";
import { Card, Grid, CircularProgress, } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import List from './TodoApp/List';
import useStyles from './styles';

import { createTodo } from '../../actions/todos';

const TodoApps = ({ taskId, setTaskId }) => {
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
        !todos.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={6}>
                <Card className={classes.taskcard}>
                <Grid item xs={12} sm={12} md={12}>
                    <div className="">
                <ol>
                {todos?.map((checks) => (
                    <List key={checks._id} check={checks} taskId={taskId} setTaskId={setTaskId} />
                ))}  
                </ol>
                </div>
                    </Grid>
                    </Card>
            </Grid>
            )
        );
    }

    export default TodoApps;