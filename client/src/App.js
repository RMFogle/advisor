import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import MainNavbar from './components/Navbars/MainNavbar';
import SubNavbar from './components/Navbars/SubNavbar';


const App = () => {

    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <MainNavbar />
            <SubNavbar />
            <Switch>
            <Route path="/" exact component={() => <Redirect to="/home" />} />
            <Route path="/home" exact component={Home} />
            </Switch>
        </Container>
        </BrowserRouter>
    );
    };

export default App;

