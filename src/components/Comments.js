import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useAuth} from "../auth-context";


export function Comments() {
    const {userData, loggedIn} = useAuth();
    let {id} = useParams();
    const [resComments, setResComments] = useState([]);
    const [commentField, setCommentField] = useState("");
    const [resDel, setResDel] = useState("");
    const [responseFromServerComment, setResponseFromServerComment] = useState("");

    async function deleteComment(id) {
        await fetch(`http://127.0.0.1:9000/api/comments/${id}`, {
            method: 'DELETE',
        }).then(response => response.json()
            .then(result => {
                setResDel(result);
                console.log(`Deleting comment : ${result}`);
                getComments();
            }))
    }

    async function onClickButtonDeleteComment(idComment) {
        deleteComment(idComment);
    }

    function onHandleChangeCommentField(event) {
        setCommentField(event.target.value)
    }

    async function getComments() {
        return await fetch(`http://127.0.0.1:9000/api/comments/${id}`)
            .then(response => response.json())
            .then(result => setResComments(result))
        console.log(`Getting comments`);
    }


    useEffect(() => {
        getComments();
    }, [])

    async function onClickButtonCreateComment(event) {
        let data = {
            'whoComment': (loggedIn ? userData.firstName : 'Anonimowy'),
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
                    console.log(result)
                    setResponseFromServerComment(result);
                    let tempArray = resComments;
                    tempArray[tempArray.length] = result;
                    setResComments(tempArray);
                }).then(()=>setCommentField(""))
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


    return (
        <div>
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
    )
}