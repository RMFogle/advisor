import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import './App.css';

import { getBreaks } from './actions/breaks';
// import Routines from './components/Routines/Routines'; 
import Form from './components/Form/Form'; 
import Breaks from './components/Breaks/Breaks';
//import advisor appbar/navbar logo image.png. 
import useStyles from './styles'; 

const App = () => {
  const classes = useStyles(); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreaks());
  }, [dispatch]);

  return (
  <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">advisor App</Typography>
        <img className={classes.image} src={''} alt="advisor" height="60" />
      </AppBar>
      <Grow in>
          <Container>
            <Grid container justify="space-between" alighItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                  <Breaks />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Form />
                </Grid>
            </Grid>
          </Container>
      </Grow>
  </Container>
  );
}

export default App;
