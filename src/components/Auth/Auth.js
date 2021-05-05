import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';
import './Auth.css';
// import { auth } from '../../firebase.js'

function Auth() {



  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  // const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const handleOpen = () => {
    setOpenSignIn(true);
  
  };

  const handleClose = () => {
    setOpenSignIn(false);
    
  };

  const c = (event) => {
    event.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("")
  }

  return (
    <div className="auth">
      <Button onClick={handleOpen}>Sign in</Button>
      <Button>Sign up</Button>

      <Modal
        open={openSignIn}
        onClose={handleClose}
      >
        <div className="signIn__wrapper">
          <form className="signIn" >
            <img className="signIn__img"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="logo" />
            <Input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}

            />

            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              className="signIn__btn"
              type="submit"
              onClick={c}
            >
              Sign In
              </Button>
          </form>
        </div>
      </Modal>


      <Modal
        open={openSignUp}
        onClose={handleClose}
      >
        <div className="signUp__wrapper">
          <form className="signUp" >
            <img className="signUp__img"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="logo" />

            <Input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            />
            <Input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}

            />

            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              className="signUp__btn"
              type="submit"
              onClick={c}
            >
              Sign Up
              </Button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default Auth
