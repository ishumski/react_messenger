import React from 'react';
import "./Container.css";
import About from "./About/About.js";
import Sidebar from "./Sidebar/Sidebar.js";
import Main from "./Main/Main.js";




export default function Container() {
    return (
        
            <div className="container">
                <About />
                <div className="container__main">
                    <Sidebar />
                    <Main />
                </div>
            </div>
        
    )
}
