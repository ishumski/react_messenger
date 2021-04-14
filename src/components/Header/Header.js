import React from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop/HeaderTop.js";
import HeaderMain from "./HeaderMain/HeaderMain.js";


function Header() {
    return (
        <div className="header">
            <HeaderTop />
            <HeaderMain />
        </div>
    )
}

export default Header;