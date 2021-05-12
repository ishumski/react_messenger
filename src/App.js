import React, { useState } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { BrowserRouter } from "react-router-dom";
// import Auth from "./components/Auth/Auth";
import HeaderTop from "./components/Header/HeaderTop/HeaderTop";



function App() {

  return (

    <BrowserRouter>

        <div className="App">

          <Header />
          <Container />
        </div>

    </BrowserRouter>

  );
}

export default App;
