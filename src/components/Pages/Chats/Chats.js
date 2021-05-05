import React from 'react';
import "./Chats.css";
import Chat from './Chat/Chat';
import ChatsSidebar from './ChatsSidebar/ChatsSidebar';

function Chats() {
    return (
        <div className="chats">
            <Chat />
            <ChatsSidebar />
        </div>
    )
}

export default Chats;
