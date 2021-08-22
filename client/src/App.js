import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import './App.css';

import { getBreaks } from './actions/breaks';
import BreakForm from './components/Forms/BreakForm/BreakForm';
import Breaks from './components/Breaks/Breaks';
import Timer from './components/Timer/Timer';

//import advisor appbar/navbar logo image.png. 
import useStyles from './styles'; 

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBreaks());
    }, [currentId, dispatch]);

    return (
    <Container maxidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h4" align="center">advisor App</Typography>
            <img className={classes.image} src={''} alt="advisor" height="60" />
        </AppBar>
        <Grow in>
            <Container>
            <Grid container justify="space-between" alighItems="stretch" spacing={3}>
                <Grid item xs={12} sm={4}>
                    <BreakForm currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Timer 
                    />
                    <br>
                    </br>
                    <Breaks setCurrentId={setCurrentId} />
                </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    );
}

export default App;
