import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../auth-context";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuth();

    function onHandleChangeEmail(event) {
        setEmail(event.target.value);
    }

    function onHandleChangePassword(event) {
        setPassword(event.target.value);
    }


    async function onClickButtonSubmit(event) {
        if (email !== "" && password !== "") {
            await fetch(`http://127.0.0.1:9000/api/users/${email}/${password}`)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok.')
                    else return response;
                })
                .then(response => response.json())
                .then(result => login(result))
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                    console.log('User not found');
                    alert('User not found')
                });
        } else {
            console.log("Please type values")
        }
    }

    return (
        <div>
            <h3>Login</h3>
            <form>
                <label>Email:</label>
                <input required value={email} onChange={(event) => onHandleChangeEmail(event)}
                       type="email"/>
                <br/>
                <label>Password:</label>
                <input required value={password} onChange={(event) => onHandleChangePassword(event)}
                       type="password"/>
                <br/>
                <input type="button" onClick={(event) => onClickButtonSubmit(event)} value="Login"/>
            </form>
            <Link to={"/registration"}>Register</Link>
        </div>
    );
}

