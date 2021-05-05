import React from "react";
import "./Main.css";
import Home from "../../Pages/Home/Home"
import Timeline from '../../Pages/Timeline/Timeline';
import Chats from "../../Pages/Chats/Chats";
import Gallery from "../../Pages/Gallery/Gallery";
import { Route, Switch } from "react-router-dom";


function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/timeline" component={Timeline} />
                <Route exact path="/message" component={Chats} />
                <Route exact path="/gallery" component={Gallery} />
            </Switch>

        </div>
    )
}
export default Main;

