import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from './Home';
import Auth from '../auth/Auth';
import Game from './Game';
import AddCard from '../add-card/AddCard';

import PrivateRoute from '../auth/PrivateRoute';

export default () => (
    <Switch>
        <Route exact path="/" render={() => <Home/>}/>;
        <Route path="/auth" render={() => <Auth/>}/>;
        <Route exact path="/game" render={() => <Game/>}/>;
        <PrivateRoute exact path="/cards" render={() => <AddCard/>}/>;
        <Redirect to="/"/>
    </Switch>
);  
