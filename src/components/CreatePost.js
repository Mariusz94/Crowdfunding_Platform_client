import React from "react";
//import FileBase from 'react-file-base64'
import FileInputComponent from 'react-file-input-previews-base64'

export class CreatePost extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            whoPosts: "",
            picture: "",
            responseFromServer: ""
        }
    }

    onHandleChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    onHandleChangeDescription(event) {
        this.setState({
            description: event.target.value
        })
    }

    onHandleChangeWhoPosts(event) {
        this.setState({
            whoPosts: event.target.value
        })
    }

    async onClickButtonSubmit(event) {

        let postForm = {
            'title': this.state.title,
            'description': this.state.description,
            'whoPosts': this.state.whoPosts
        };
        console.log(postForm);

        if (postForm.title !== "" && postForm.description !== "" && postForm.whoPosts !== "") {
            let data = {
                'title': postForm.title,
                'description': postForm.description,
                'whoPosts': postForm.whoPosts,
                'picture' : this.state.picture
            }

            await fetch('http://127.0.0.1:9000/api/posts/', {
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

            window.location ='/home';
        } else {
            alert("wrong data")
            console.log("wrong data");
        }

    }

    render() {
        return (
            <div>
                <h3>Create Post</h3>

                <form>
                    <label>Title</label><br/>
                    <input required value={this.state.title} onChange={(event) => this.onHandleChangeTitle(event)}
                           type="text"/>
                    <br/>
                    <label>Description</label><br/>
                    <input required value={this.state.description} onChange={(event) => this.onHandleChangeDescription(event)}
                           type="text"/>
                    <br/>
                    <label>Who posted</label><br/>
                    <input required value={this.state.whoPosts} onChange={(event) => this.onHandleChangeWhoPosts(event)}
                           type="text"/>
                    <br/>
                    <label>Picture</label>
                    <div>
                        <FileInputComponent
                            labelText="Select file"
                            labelStyle={{fontSize:14}}
                            multiple={false}
                            callbackFunction={(file_arr)=>{this.setState({picture : file_arr.base64})}}
                            accept="image/*"
                            buttonComponent={<button type="button">Choice</button>}
                        />
                    </div>
                    <br/>

                    <input type="button" onClick={(event) => this.onClickButtonSubmit(event)} value="Submit"/>
                </form>
            </div>
        );
    }
}

