import React from "react";
import { Card, Grid, CircularProgress, } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ListItemCustom from './List/List';
import useStyles from './styles';


const TodoApps = ({ taskId, setTaskId }) => {
    const todos = useSelector((state) => state.todos)
    const classes = useStyles();

    console.log(todos);

    return (
        !todos.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={6}>
                <Card className={classes.taskcard}>
                <Grid item xs={12} sm={12} md={12}>
                    <div className="">
                        <ol>
                        {todos?.map((checks) => (
                            <ListItemCustom key={checks._id} check={checks} taskId={taskId} setTaskId={setTaskId} />
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