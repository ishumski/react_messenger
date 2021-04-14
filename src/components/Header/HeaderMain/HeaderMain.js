import React from "react";
import "./HeaderMain.css";

function HeaderMain() {

    // function showMessage() {
    //     alert("ok")
    // }

    return (
        <div className="header__main">
            <img
                className="header__cover_foto"
                src="https://i.pinimg.com/originals/4f/d3/50/4fd3509513507f97cc7b30edc5cc910f.jpg"
                alt="header-cover-foto"

            />

            {/* <img
                onClick={showMessage}
                className="header__profile_foto"
                src="https://data.whicdn.com/images/20433362/original.jpg"

            /> */}
        </div>
    )
}

export default HeaderMain