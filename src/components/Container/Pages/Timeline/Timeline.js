import React, { useState, useEffect } from 'react';
import Post from './Post/Post.js';
import "./Timeline.css";
import TimelineBox from './TimelineBox/TimelineBox';
import { db } from "../../../../firebase.js";


function Timeline() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="timeline">

            <div className="timeline__line">

                <TimelineBox />
                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}

                    />
                ))}



            </div>

            <div className="timeline__widget">
                WIDGET
            </div>

        </div>
    )
}

export default Timeline;
