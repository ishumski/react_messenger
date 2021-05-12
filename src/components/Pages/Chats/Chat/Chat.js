import React, { useState, useParams, useEffect } from 'react';
import "./Chat.css";

import { Avatar, IconButton, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MicIcon from '@material-ui/icons/Mic';
import { db } from '../../../../firebase';
import firebase from 'firebase';

function Chat() {

    //хук состояния инпута, набираем в неём сообщение
    const [input, setInput] = useState("");
    //хук состояния сообщений, нач. знач. пустой массив, куда будем складывать все месседжи
    const [messages, setMessages] = useState([]);

    const roomId = useParams();

    useEffect(() => {
        if (roomId) {
            // db
            //     .collection('rooms')
            //     .doc(roomId)
            //     .onSnapshot(snapshot => {
            //         setRoomName(snapshot.data().name);
            //     });

            db
                .collection('rooms')
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot(snapshot => {
                    setMessages(snapshot.docs.map(doc => doc.data()))
                });

        }
    }, [roomId]);

    const sendMessage = (event) => {
        event.preventDefault();
        db.collection("rooms").doc(roomId).collection('messages').add({
            message: input,
            name: "first room",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
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
                {messages.map(message => {
                    <p className="chat__message">
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                })}

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

                    <Button
                        className="chat__footer-btn"
                        type="submit"
                        onClick={sendMessage}
                    >
                        Send a Message
                    </Button>
                    <MicIcon />
                </form>
            </div>
        </div>
    )
}

export default Chat
