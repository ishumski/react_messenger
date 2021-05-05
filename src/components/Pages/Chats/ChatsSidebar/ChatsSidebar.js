import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./ChatsSidebar.css"

function ChatsSidebar() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000))
    }, [])

    return (
        <div className="chatsSidebar">
            <div className="chatsSidebar__header">

            </div>
            <div className="sidebarChat__body">
                <Avatar src={`https://avatars.dicebear.com/api/bottts/:${seed}.svg`} />
                <div className="ChatsSidebar__info">
                    <h3>Name</h3>
                    <p>Last message</p>
                </div>
            </div>
            <div className="sidebarChat__body">
                <Avatar src={`https://avatars.dicebear.com/api/bottts/:${seed}.svg`} />
                <div className="ChatsSidebar__info">
                    <h3>Name</h3>
                    <p>Last message</p>
                </div>
            </div>
            <div className="sidebarChat__body">
                <Avatar src={`https://avatars.dicebear.com/api/bottts/:${seed}.svg`} />
                <div className="ChatsSidebar__info">
                    <h3>Name</h3>
                    <p>Last message</p>
                </div>
            </div>

        </div>
    )
}

export default ChatsSidebar
