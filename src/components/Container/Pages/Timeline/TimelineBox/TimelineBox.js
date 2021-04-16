import React from 'react';
import "./TimelineBox.css";
import { Avatar, Button } from '@material-ui/core';



function TimelineBox() {
    return (
        <div className="timeline__box">
            <form>
                <div className="timeline__box_input">
                    <Avatar />
                    <input type="text" placeholder="What's happening..." />
                </div>
                <Button className="timeline__btn">Post</Button>
            </form>
        </div>
    )
}
export default TimelineBox;