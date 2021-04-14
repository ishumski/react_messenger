import React from "react";
import "./HeaderLogo.css";

function HeaderLogo({ image }) {
    return (
        <img className="header__logo" src={image} alt="header-logo" />
    )
}

export default HeaderLogo;