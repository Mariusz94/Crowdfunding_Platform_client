import React, {createContext, useState} from "react";
import {Redirect} from "react-router-dom";

const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve,milliseconds));
}

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});
   /* useEffect(() => {

    });*/

    const login = (user) => {
        console.log("I am logging in")
        sleep(2000).then(setUserData(user)).then(setLoggedIn(true));
        return <Redirect to="/" />
    };

    const logout = () => {
        console.log("I am logging out")
        sleep(2000).then(setUserData(null)).then(setLoggedIn(false));
        return <Redirect to="/" />
    };

    const authContextValue = {
        login,
        logout,
        loggedIn,
        userData
    };
    return <AuthContext.Provider value={authContextValue} {...props} />
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }