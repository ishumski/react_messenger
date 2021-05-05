import React, { useState, useRef } from 'react';
import "./TimelineBox.css";
import { Avatar, Button } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import { db, storage } from "../../../../firebase.js"

function TimelineBox() {

    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);

    const customUploadIcon = useRef(null);


    const handleClick = event => {
        customUploadIcon.current.click()
        console.log("it works")
    };

    //выбираем картинку
    const handleChange = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0])
        }
    }

    //ссылка на файл images, где будут все наши картинки
    const handleUpload = (event) => {

        event.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => { },
            (error) => {
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection("posts").add({
                            displayName: "Jane Doe",
                            username: "deadinside",
                            text: caption,
                            avatar: 'https://data.whicdn.com/images/20433362/original.jpg',
                            image: url,
                        });

                        setCaption("");
                        setImage(null);
                    });
            })
        console.log(image)
    }

    return (
        <div className="timeline__box" >
            <form>
                <div className="timeline__box_input">
                    <Avatar src='https://data.whicdn.com/images/20433362/original.jpg' />
                    <input
                        type="text"
                        placeholder="What's happening..."
                        value={caption}
                        onChange={(event) => setCaption(event.target.value)}
                    />

                    <IconButton onClick={handleClick}>
                        <AttachFileIcon />
                    </IconButton>

                    <input
                        type="file"
                        onChange={handleChange}
                        ref={customUploadIcon}
                        style={{ display: 'none' }}

                    />

                </div>


                <Button
                    className="timeline__btn"
                    type="submit"
                    onClick={handleUpload}
                >
                    Post
                </Button>
            </form>
        </div>
    )
}
export default TimelineBox;