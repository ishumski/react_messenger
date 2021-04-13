import React from "react";
import "./HeaderLogo.css";

function HeaderLogo({ image }) {
    return (
        <div>
            <img className="header__logo" src={image} alt="header-logo" />
        </div>
    )
}

export default HeaderLogo;