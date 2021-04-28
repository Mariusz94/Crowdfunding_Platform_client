import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth} from "./auth-context";
import {AuthenticatedRoutes, UnauthenticatedRoutes} from './routes'
import {BrowserRouter as Router, Switch} from "react-router-dom";

export const App = (props) => {
    const {loggedIn} = useAuth();

    return (
    <Router>
        <Switch>
            {loggedIn ? <AuthenticatedRoutes/> : <UnauthenticatedRoutes/>}
        </Switch>
    </Router>
    )
}

//https://reactrouter.com/web/guides/quick-start
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
