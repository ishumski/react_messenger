import React, { useState } from 'react';
import "./Chat.css";

import { Avatar, IconButton, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {

    const [input, setInput] = useState("");
    

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(input)
        setInput("");
    }

    

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__header_info">
                    <h3>Room name</h3>
                    <p>Last activity</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">User name</span>
                        MESSAGE
                    <span className="chat__timestamp">01.01.2021</span>
                </p>
            </div>
            <div className="chat__footer">
                <form>
                    <SentimentVerySatisfiedIcon />
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        type="text"
                        placeholder="Type a message"

                    />

                    <Button type="submit" onClick={sendMessage} className="chat__footer-btn"> Send a Message</Button>
                    <MicIcon />
                </form>
            </div>
        </div>
    )
}

export default Chat
