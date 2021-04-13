import React from "react";
import { Avatar } from "@material-ui/core";
import "./HeaderMain.css";

function HeaderMain() {
    return (
        <div className="header__main">
            <img className="header__main_cover_foto" src="https://i.pinimg.com/originals/4f/d3/50/4fd3509513507f97cc7b30edc5cc910f.jpg" alt="header-cover-foto" />

            <Avatar className="header__main_avatar" src="https://www.pngitem.com/pimgs/m/191-1916342_adventure-time-logo-adventure-time-logo-png-transparent.png" />
        </div>
    )
}

export default HeaderMain