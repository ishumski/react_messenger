import React from 'react';
import "./Container.css";
import About from "./About/About.js";
import Sidebar from "./Sidebar/Sidebar.js";
import Main from "./Main/Main.js";
import Timeline from './Pages/Timeline/Timeline.js';
import Message from "./Pages/Messages/Messages.js";
import Gallery from "./Pages/Gallery/Gallery.js";
import { Route, Switch } from "react-router-dom";




function Container() {
    return (

        <div className="container">
            <About />
            <div className="container__main">
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/timeline" component={Timeline} />
                    <Route exact path="/message" component={Message} />
                    <Route exact path="/gallery" component={Gallery} />
                </Switch>

            </div>
        </div>

    )
}
export default Container;