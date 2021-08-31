import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import List from './TodoApp/List';
import useStyles from './styles';
import "./styles.css";

const TodoApps = ({ taskId, setTaskId }) => {
    const todos = useSelector((state) => state.todos)
    const classes = useStyles();

    console.log(todos);

    return (
        !todos.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                <div className="">
                    <h2>Task List:</h2>
                <ol>
                {todos?.map((checks) => (
                    <List key={checks._id} check={checks} taskId={taskId} setTaskId={setTaskId} />
                ))}  
                </ol>
                </div>
                    </Grid>
            </Grid>
            )
        );
    }

    export default TodoApps;