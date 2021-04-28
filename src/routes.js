import React from "react";
import {Route, Redirect} from "react-router-dom";
import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Registration} from "./components/Registration";
import {CreatePost} from "./components/CreatePost";
import {OnePost} from "./components/OnePost";

export const UnauthenticatedRoutes = () => {
    return (
        <div>
            <Route exact path="/">
                <Root>
                    <Home/>
                </Root>
            </Route>
            <Route path="/home">
                <Root>
                    <Home/>
                </Root>
            </Route>
            <Route path="/createPost">
                <Redirect to="/login"/>
            </Route>
            <Route path="/login">
                <Root>
                    <Login/>
                </Root>
            </Route>
            <Route path="/registration">
                <Root>
                    <Registration/>
                </Root>
            </Route>
            <Route path="/post/:id">
                <Root>
                    <OnePost/>
                </Root>
            </Route>
        </div>
    );
}

export const AuthenticatedRoutes = () => {
    return (
        <div>
            <Route exact path="/">
                <Root>
                    <Home/>
                </Root>
            </Route>
            <Route path="/home">
                <Root>
                    <Home/>
                </Root>
            </Route>
            <Route path="/createPost">
                <Root>
                    <CreatePost/>
                </Root>
            </Route>
            <Route path="/login">
                <Redirect to="/"/>
            </Route>
            <Route path="/registration">
                <Redirect to="/"/>
            </Route>
            <Route path="/post/:id">
                <Root>
                    <OnePost/>
                </Root>
            </Route>
        </div>
    );
}