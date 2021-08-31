import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {

    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />
            <Switch>
            <Route path="/" exact component={() => <Redirect to="/home" />} />
            <Route path="/home" exact component={Home} />
            </Switch>
        </Container>
        </BrowserRouter>
    );
    };

export default App;
