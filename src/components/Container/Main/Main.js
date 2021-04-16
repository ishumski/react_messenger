import React from "react";
import "./Main.css";
import Home from "../Pages/Home/Home.js"
import Timeline from '../Pages/Timeline/Timeline.js';
import Message from "../Pages/Messages/Messages.js";
import Gallery from "../Pages/Gallery/Gallery.js";
import { Route, Switch } from "react-router-dom";


function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/timeline" component={Timeline} />
                <Route exact path="/message" component={Message} />
                <Route exact path="/gallery" component={Gallery} />
            </Switch>

        </div>
    )
}
export default Main;

