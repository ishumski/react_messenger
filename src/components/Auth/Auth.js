import React, { useState, useEffect } from 'react';

import './Auth.css';
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { db, auth } from '../../firebase.js'


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Auth() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const [user, setUser] = useState(null);

  const c = (event) => {
    event.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("")
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null)
      }
    });
    return () => {
      unsubscribe();
    }

  }, [user, username]);

  const signUpUser = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setOpenSignUp(false);
  };

  const signInUser = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpenSignIn(false);
  }

  return (
    <div className="auth">
      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ) : (
        <>
          <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
          <Button onClick={() => setOpenSignUp(true)}>Sign Up</Button>
        </>
      )}

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
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
              onClick={signInUser}
            >
              Sign In
              </Button>
          </form>
        </div>
      </Modal>

      <Modal
        open={openSignUp}
        onClose={() => setOpenSignUp(false)}
      >
        <div style={modalStyle} className={classes.paper}>
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
              onClick={signUpUser}
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
