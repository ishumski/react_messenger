import React from 'react';
import "./About.css";

function About() {
    return (
        <div className="about">
            <img
                className="about__profile-photo"
                src="https://data.whicdn.com/images/20433362/original.jpg"
                alt="profile-photo"
            />
            <div className="about__links">

                <a href="https://www.google.com/">google</a>
                <a href="https://twitter.com/">twitter</a>
                <a href="https://www.youtube.com/">youtube</a>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default About;
