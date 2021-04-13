import React from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo.js";
import HeaderNav from "./HeaderNav/HeaderNav.js"
import "./HeaderTop.css";

function HeaderTop() {

    return (
        <div className="header__top">
            <HeaderLogo image="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
            <HeaderNav text="Home" />
            <HeaderNav text="Time Line" />

        </div>
    )
}

export default HeaderTop;