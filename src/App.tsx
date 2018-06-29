import * as React from 'react'
import { Component } from 'react';

import Events from 'src/pages/Events'
import EventAttendees from 'src/pages/EventAttendees'
import { Route, Switch, HashRouter } from 'react-router-dom';

class App extends Component {

    public render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact={true} path='/' component={Events} />
                    <Route exact={true} path='/event/:id' component={EventAttendees} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
