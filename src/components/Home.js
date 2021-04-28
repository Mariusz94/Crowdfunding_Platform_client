import React, {useEffect, useState} from "react";
import {useAuth} from "../auth-context";
import {Link} from "react-router-dom";


export function Home() {
    const [posts, setPosts] = useState([]);
    const {userData, logout, loggedIn} = useAuth();

    async function getPosts() {
        await fetch(`http://127.0.0.1:9000/api/posts/`)
            .then(response => response.json()
                .then(response.ok)
                .then(result => setPosts(result)));
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            <h3>Home</h3>
            {loggedIn ? <h4>Welcome {userData.firstName}</h4> : <h4>Welcome</h4>}
            {loggedIn ? <button onClick={logout}>Logout</button> : <br/>}
            <ul>
                {posts.map((post) => <li key={post["_id"]}><Link
                    to={`/post/${post["_id"]}`}>{post.title} : {post.description} : {post.whoPosts}</Link></li>)}
            </ul>
        </div>
    );
}