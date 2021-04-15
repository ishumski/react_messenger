import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { BrowserRouter } from "react-router-dom";


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
