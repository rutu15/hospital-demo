import React from 'react';
import {RoutesPath} from './RouteComponents'
import {Route, Switch, Router} from 'react-router';
import {createBrowserHistory} from 'history'
import PrivateRoute from "./privateRoute";

const history = createBrowserHistory()

function Index(props) {

    return (
        <div>
            <Router history={history}>
                <Switch>
                    {RoutesPath.map(item => (
                        item.private ? <PrivateRoute
                                exact
                                path={item.path}
                                key={item.path}
                                component={item.component}
                            />
                            :
                            <Route
                                exact
                                path={item.path}
                                key={item.path}
                                component={item.component}
                            />
                    ))}
                </Switch>
            </Router>
        </div>
    );
}

export default Index;