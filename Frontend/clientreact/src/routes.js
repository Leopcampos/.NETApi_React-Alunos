import React from 'react';
import { BrowserRoute, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRoute>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </BrowserRoute>
    )
}