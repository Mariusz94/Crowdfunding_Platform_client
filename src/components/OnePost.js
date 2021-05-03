import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Comments} from './Comments'
import './cos.css'

export function OnePost() {
    let {id} = useParams();
    const [res, setRes] = useState("");
    const [resDel, setResDel] = useState("");

    async function getPost() {
        return await fetch(`http://127.0.0.1:9000/api/posts/${id}`)
            .then(response => response.json())
            .then(result => setRes(result))
    }

    useEffect(() => {
        getPost();
    }, [])

    async function onClickButtonDeletePost(event) {
        await fetch(`http://127.0.0.1:9000/api/posts/${id}`, {
            method: 'DELETE',
        }).then(response => response.json()
            .then(result => setResDel(result)))
        await fetch(`http://127.0.0.1:9000/api/comments/post/${id}`, {
            method: 'DELETE',
        })

        window.location = '/home';
    }

    console.log(res)

    return (
        <div>
            <center>
                <h3 className="cos">Post: {id}</h3>
            </center>
            <hr/>
            <h4>Title : {res.title}</h4>
            <h5>Description : {res.description}</h5>
            <h6>Author : {res.whoPosts}</h6>
            <div style={{width: '80vw', height: '20vh', backgroundColor: 'gray'}}>
                <img src={res.picture} alt="Picture" height="100%"/>
            </div>
            <p>{res.whoPosts}</p>
            <input type="button" onClick={(event) => onClickButtonDeletePost(event)} value="Delete"/>
            <hr/>

            <Comments/>

        </div>
    );

}

/////////////////////////////////
/*
export function OnePost() {
    let {id} = useParams();
    const [res, setRes] = useState("");
    const [resComments, setResComments] = useState([]);
    const [resDel, setResDel] = useState("");
    const [commentField, setCommentField] = useState("");
    const [commentUpdate, setCommentUpdate] = useState(true);
    const [responseFromServerComment, setResponseFromServerComment] = useState("");

    async function getPost() {
        return await fetch(`http://127.0.0.1:9000/api/posts/${id}`)
            .then(response => response.json())
            .then(result => setRes(result))
    }

    async function getComments() {
        return await fetch(`http://127.0.0.1:9000/api/comments/${id}`)
            .then(response => response.json())
            .then(result => setResComments(result))
    }

    useEffect(() => {
        getPost();
    }, [])


    useEffect(() => {
        getComments();
    }, [])


    async function onClickButtonDeletePost(event) {
        await fetch(`http://127.0.0.1:9000/api/posts/${id}`, {
            method: 'DELETE',
        }).then(response => response.json()
            .then(result => setResDel(result)))
        await fetch(`http://127.0.0.1:9000/api/comments/post/${id}`, {
            method: 'DELETE',
        })

        window.location = '/home';
    }

    async function onClickButtonCreateComment(event) {
        let data = {
            'whoComment': 'Zyzio',
            'whatPostComment': id,
            'comment': commentField
        }
        if (data.whoComment !== "" && data.whatPostComment !== "" && data.comment !== "") {

            await fetch('http://127.0.0.1:9000/api/comments/', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok.')
                    else return response;
                })
                .then(response => response.json())
                .then(result => {
                    setResponseFromServerComment(result);
                    console.log(responseFromServerComment);
                    let tempArray = resComments;
                    tempArray[tempArray.length] = responseFromServerComment;
                    setResComments(tempArray);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });


            //resComments[resComments.length] = responseFromServerComment;
            //window.location = `/post/${id}`;
        } else {
            alert("wrong data")
            console.log("wrong data");
        }
    }

    async function deleteComment(id) {
        await fetch(`http://127.0.0.1:9000/api/comments/${id}`, {
            method: 'DELETE',
        }).then(response => response.json()
            .then(result => setResDel(result)))

        console.log(resDel);
    }

    async function onClickButtonDeleteComment(idComment) {
        deleteComment(idComment);

        window.location = `/post/${id}`;
    }

    function onHandleChangeCommentField(event) {
        setCommentField(event.target.value)
    }

    console.log(res)

    return (
        <div>
            <h3>Post: {id}</h3>
            <hr/>
            <h4>Title</h4><br/>
            <p>{res.title}</p>
            <h5>Description</h5><br/>
            <p>{res.description}</p>
            <h6>Author: </h6>
            <p>{res.whoPosts}</p>
            <h6>Picture: </h6>
            <div style={{width: '80vw', height: '60vh', backgroundColor: 'gray'}}>
                <img src={res.picture} alt="Picture" height="100%"/>
            </div>
            <p>{res.whoPosts}</p>
            <input type="button" onClick={(event) => onClickButtonDeletePost(event)} value="Delete"/>
            <hr/>
            <h4>Comments:</h4>
            <input required value={commentField} onChange={(event) => onHandleChangeCommentField(event)} type="text"/>
            <input type="button" onClick={(event) => onClickButtonCreateComment(event)} value="Comment"/>
            <hr/>
            <ul>
                {resComments.map((comment) => <li
                    key={comment["_id"]}>{comment["createdAt"]} : {comment.whoComment} : {comment.comment}
                    <input type="button" onClick={(event) => onClickButtonDeleteComment(comment["_id"])}
                           value="Delete"/></li>)}
            </ul>
        </div>
    );

}
*/
