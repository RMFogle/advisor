import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Agenda from './Agenda/Agenda';
import useStyles from './styles';

const Agendas = ({ agendaId, setAgendaId }) => {
    const agendas = useSelector((state) => state.agendas)
    const classes = useStyles();

    console.log(agendas);

    return (
        !agendas.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {agendas?.map((posts) => (
                    <Grid key={posts._id} item xs={12} sm={12} md={6}>
                        <Agenda post={posts} agendaId={agendaId} setAgendaId={setAgendaId} />
                    </Grid>
                ))}
            </Grid>
        )
    ); 
}

export default Agendas; 