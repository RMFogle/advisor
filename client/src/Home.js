import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, IconButton } from '@material-ui/core';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import './App.css';

import { getBreaks } from './actions/breaks';
import Breaks from './components/Breaks/Breaks';

import { getTodos } from './actions/todos';
import TodoAppCombo from './components/TodoApps/CombineTodoApp';

const Home = () => {
    const [breakId, setBreakId] = useState(null);
    const [taskId, setTaskId] = useState(null);
    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        dispatch(getBreaks(breakId));
    }, [breakId, dispatch]);

    useEffect(() => {
        dispatch(getTodos(taskId));
    }, [taskId, dispatch]);

    return (
    <Container maxidth="lg">
        <Grow in>
            <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={3}>
                <IconButton onClick={() => setVisible(!visible)}>{visible ? <VisibilityOffIcon fontSize="small"/> : <VisibilityIcon fontSize="small"/>}</IconButton>
                {visible && <TodoAppCombo taskId={taskId} setTaskId={setTaskId} />}
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Breaks breakId={breakId} setBreakId={setBreakId} />        
                </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    );
}

export default Home;