import React from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop/HeaderTop.js";
import HeaderMain from "./HeaderMain/HeaderMain.js";
import HeaderBottom from "./HeaderBottom/HeaderBottom.js"


function Header() {
    return (
        <div className="header">
            <HeaderTop />
            <HeaderMain />
            <HeaderBottom displayName={"Ilia White"} />


        </div>

    )
}

export default Header;