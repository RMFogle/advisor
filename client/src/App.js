import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import MainNavbar from './components/Navbars/MainNavbar';
import SubNavbar from './components/Navbars/SubNavbar';


const App = () => {

    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <MainNavbar />
            <SubNavbar />
            <Switch>
            <Route path="/" exact component={Home} />
            </Switch>
        </Container>
        </BrowserRouter>
    );
    };

export default App;