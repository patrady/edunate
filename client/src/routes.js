import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Homepage from './Homepage';
import Profile from './Profile';
import PageNotFound from "./Components/pageNotFound";

export default (
    <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/homepage' component={Homepage} exact />
        <Route path='/profile' component={Profile} exact />

        <Route component={PageNotFound} />
    </Switch>
)