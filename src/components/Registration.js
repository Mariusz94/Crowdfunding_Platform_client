import React from "react";

export class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordRepeat: "",
            responseFromServer: ""
        }
    }

    onHandleChangeFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    onHandleChangeLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    onHandleChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    onHandleChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onHandleChangePasswordRepeat(event) {
        this.setState({
            passwordRepeat: event.target.value
        })
    }

    async onClickButtonSubmit(event) {
        let userForm = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            passwordRepeat: this.state.passwordRepeat
        };
        console.log(userForm);

        if (userForm.password === userForm.passwordRepeat && userForm.firstName !== "" && userForm.lastName !== "" && userForm.email !== "" && userForm.password !== "") {
            let data = {
                'firstName': userForm.firstName,
                'lastName': userForm.lastName,
                'email': userForm.email,
                'password': userForm.password
            }

            await fetch('http://127.0.0.1:9000/api/users/', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then(response => response.json()
                .then(result => {
                    this.state.responseFromServer = result
                }))

            console.log(this.state.responseFromServer);

            window.location = '/login';
        } else {
            alert("password and repeat password are not the same or wrong data")
            console.log("password and repeat password are not the same or wrong data");
        }
    }


    render() {

        let x1 = <p>{this.state.firstName}</p>
        let x2 = <p>{this.state.lastName}</p>
        let x3 = <p>{this.state.email}</p>
        let x4 = <p>{this.state.password}</p>
        let x5 = <p>{this.state.passwordRepeat}</p>


        return (
            <div>
                <h3>Register</h3>
                <form>
                    <label>First name:</label>
                    <input required value={this.state.firstName}
                           onChange={(event) => this.onHandleChangeFirstName(event)} type="text"/>
                    <br/>
                    <label>Last name:</label>
                    <input required value={this.state.lastName} onChange={(event) => this.onHandleChangeLastName(event)}
                           type="text"/>
                    <br/>
                    <label>Email:</label>
                    <input required value={this.state.email} onChange={(event) => this.onHandleChangeEmail(event)}
                           type="email"/>
                    <br/>
                    <label>Password:</label>
                    <input required value={this.state.password} onChange={(event) => this.onHandleChangePassword(event)}
                           type="password"/>
                    <br/>
                    <label>Repeat password:</label>
                    <input required value={this.state.passwordRepeat}
                           onChange={(event) => this.onHandleChangePasswordRepeat(event)} type="password"/>
                    <br/>
                    <input type="button" onClick={(event) => this.onClickButtonSubmit(event)} value="Submit"/>
                </form>
                {x1}
                {x2}
                {x3}
                {x4}
                {x5}
            </div>
        );
    }
}
