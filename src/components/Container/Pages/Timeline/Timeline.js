import React from 'react';
import Post from './Post/Post.js';
import "./Timeline.css";
import TimelineBox from './TimelineBox/TimelineBox';


function Gallery() {
    return (
        <div className="timeline">

            <div className="timeline__line">

                <TimelineBox />
                <Post
                    displayName="Jane Doy"
                    avatar="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
                    text="Hardcore post Text"
                    image="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
                    username="deadinside"
                />
                 <Post
                    displayName="Jane Doy"
                    avatar="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
                    text="Hardcore post Text"
                    image="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
                    username="deadinside"
                />
                 <Post
                    displayName="Jane Doy"
                    avatar="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
                    text="Hardcore post Text"
                    image="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
                    username="deadinside"
                />


            </div>

            <div className="timeline__widget">
                WIDGET
            </div>

        </div>
    )
}

export default Gallery;
