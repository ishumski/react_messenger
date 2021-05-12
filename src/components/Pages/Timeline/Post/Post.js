

import React from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


function Post({ avatar, displayName, text, image}) {
    return (
        <div className="post">
            <Avatar src={avatar} />
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerInfo">
                        <h3>
                            {displayName}{" "}
                            <span className="post__username"></span>
                        </h3>
                    </div>
                </div>
                <div className="post__headerText">
                    <p >{text}</p>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ThumbUpAltIcon />
                    <ThumbDownIcon />

                </div>
            </div>

        </div>
    )
}

export default Post;
