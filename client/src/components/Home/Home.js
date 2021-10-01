import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, IconButton } from '@material-ui/core';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';

import { getAgendas } from '../../actions/agendas';
import Agendas from '../Agendas/Agendas';

import { getTodos } from '../../actions/todos';
import TodoAppCombo from '../TodoApps/CombineTodoApp';

const Home = () => {
    const [agendaId, setAgendaId] = useState(null);
    const [taskId, setTaskId] = useState(null);
    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        dispatch(getAgendas(agendaId));
    }, [agendaId, dispatch]);

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
                        <Agendas agendaId={agendaId} setAgendaId={setAgendaId} />        
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    );
}

export default Home;