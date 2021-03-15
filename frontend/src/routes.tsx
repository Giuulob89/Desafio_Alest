import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Principal_Page from './pages/Principal-page'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal_Page} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;