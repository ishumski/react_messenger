import React, { useState } from 'react';
import "./TimelineBox.css";
import { Avatar, Button } from '@material-ui/core';
import { db } from "../../../../../firebase.js"
import ImageUpload from '../../../../../ImageUpload';



function TimelineBox() {

    const [publishPost, setPublishPost] = useState("");

    const addPost = (event) => {
        event.preventDefault();

        db.collection("posts").add(({
            displayName: "Jane Doy",
            username: "deadinside",
            text: publishPost,
            avatar: 'https://data.whicdn.com/images/20433362/original.jpg',
            image: 'https://memax.club/wp-content/uploads/2019/05/55-176.jpg'
        }))
        setPublishPost("");
    }

    return (
        <div className="timeline__box">
            <form>
                <div className="timeline__box_input">
                    <Avatar src='https://data.whicdn.com/images/20433362/original.jpg' />
                    <input
                        type="text"
                        placeholder="What's happening..."
                        value={publishPost}
                        onChange={(event) => setPublishPost(event.target.value)}

                    />
                </div>
                <ImageUpload />
                <Button
                    className="timeline__btn"
                    type="submit"
                    onClick={addPost}

                >
                    Post
                </Button>
                
            </form>
        </div>
    )
}
export default TimelineBox;