import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from './components/Home';
import Auth from './components/Auth';
import Game from './routes/Game';
import AddCard from './components/AddCard';

import PrivateRoute from './PrivateRoute';

export default () => (
    <Switch>
        <Route exact path="/" render={() => <Home/>}/>;
        <Route path="/auth" render={() => <Auth/>}/>;
        <Route exact path="/game" render={() => <Game/>}/>;
        <PrivateRoute exact path="/cards" render={() => <AddCard/>}/>;
        <Redirect to="/"/>
    </Switch>
);  
