import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import './App.css';

import { getBreaks } from './actions/breaks';
import Breaks from './components/Breaks/Breaks';
import Timer from './components/Timer/Timer';

import { getTodos } from './actions/todos';
import TodoApps from './components/TodoApps/TodoApps';

import useStyles from './styles'; 

const Home = () => {
    const [breakId, setBreakId] = useState(null);
    const [taskId, setTaskId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBreaks(breakId));
    }, [breakId, dispatch]);

    useEffect(() => {
        dispatch(getTodos(taskId));
    }, [taskId, dispatch]);

    return (
    <Container maxidth="lg">
        {/* <AppBar className={classes.appBar} position="static" color="inherit"> */}
            {/* <Typography className={classes.heading} variant="h4" align="center">advisor App</Typography>
            <img className={classes.image} src={''} alt="advisor" height="60" />
        </AppBar> */}
        <Grow in>
            <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={5}>
                <TodoApps taskId={taskId} setTaskId={setTaskId} />
                <Timer />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Breaks breakId={breakId} setBreakId={setBreakId} />
                </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    );
}

export default Home;