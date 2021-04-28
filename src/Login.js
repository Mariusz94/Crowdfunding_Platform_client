/*
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

const Header = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [globalData, setGlobalData] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    async function handleSubmit(event) {
        event.preventDefault();

        await fetch(`http://127.0.0.1:9000/api/users/${email.valueOf()}/${password.valueOf()}`)
            .then(response => response.json()
                .then(result => setGlobalData(result)))

        console.log(globalData)
        document.getElementById("some").innerHTML = globalData.email;

        // console.log(arr)
        /!*const arr = fetch(`http://127.0.0.1:9000/api/users/${email.valueOf()}/${password.valueOf()}`)
            .then(result => {return result.json();}).then(result => console.log(result))
        console.log(arr);*!/
        /!*      (async () => {
                  const arr = await (fetch('http://127.0.0.1:9000/api/users/test@gmail.com/password').then(result => {
                      return result.json();
                  }));
                  console.log(arr.password);
              })();*!/
        /!*
                let data = {
                    'firstName': 'Łukasz',
                    'lastName': 'Hiacynt',
                    'email': email.valueOf(),
                    'password': password.valueOf()
                }
                fetch('http://127.0.0.1:9000/api/users/', {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify(data),
                }).then(r => console.log(r));
        *!/

    }

    return (
        <div className="Header">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Header
                </Button>
            </Form>
            <p id="some"></p>
        </div>
    );
}
export default Header

*/
