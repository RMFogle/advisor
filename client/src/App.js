import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; 
import './App.css';

import Routines from './components/Routines/Routines'; 
import Form from './components/Form/Form'; 
//import advisor appbar/navbar logo image.png. 
//import useStyles from './styles'; 

const App = () => {
  // const classes = useStyles(); 

  return (
  <Container maxidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">advisor App</Typography>
        <img src={''} alt="advisor" height="60" />
      </AppBar>
      <Grow in>
          <Container>
            <Grid container justify="space-between" alighItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                  <Routines />
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
