import React, { useState } from 'react';
import { storage, db } from "./firebase.js";
import { Button } from '@material-ui/core';
// import AttachFileIcon from '@material-ui/icons/AttachFile';
// import { IconButton } from '@material-ui/core';

function ImageUpload() {

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => { },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(console.log(url))
          })
      }
    )
  }

  return (
    <div className="imageUpload">
      <h2>ImageUpload</h2>

      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  )
}

export default ImageUpload;
