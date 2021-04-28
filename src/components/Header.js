import React from "react";
import {Link, NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><NavLink to={"/home"} activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>Home</NavLink></li>
                        <li><Link to={"/login"}>Login</Link></li>
                        <li><Link to={"/registration"}>Register</Link></li>
                        <li><Link to={"/createPost"}>Create post</Link></li>
                    </ul>
                </div>
            </div>
            <hr/>
        </nav>
    );
}
