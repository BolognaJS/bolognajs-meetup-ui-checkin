import * as React from 'react'
import { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';

import Events from 'src/pages/Events'
import EventAttendees from 'src/pages/EventAttendees'
import { Route, Switch, Router } from 'react-router-dom';

const history = createBrowserHistory();

class App extends Component {

    public render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact={true} path='/' component={Events} />
                    <Route exact={true} path='/event/:id' component={EventAttendees} />
                </Switch>
            </Router>
        );
    }
}

export default App;
