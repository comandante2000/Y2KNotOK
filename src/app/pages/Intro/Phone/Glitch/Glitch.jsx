import "./Glitch.scss";
import { useState } from "react";
export default function Glitch({setNewuser}) {
    console.log("asdasdaddsxcsdlcjhsdfsd");
    const DonePlaying = () => {
        console.log("Video has ended");
        setNewuser(false);
    };
    // let audio1 = "https://images.stinkyfruit.com/introbootvideo.mp4";
    // let audio1 = "https://images.stinkyfruit.com/BootScreenV9.mp4";
    let audio1 = "https://images.stinkyfruit.com/Glitch.webm";
    return (
        <div id="pda-Glitch-screen">
            <div className="introvideo ">
                <video
                    className="video-size"
                    // autoplay="true"
                    id="intro"
                    src={audio1}
                    type="video/mp4"
                    onEnded={DonePlaying}
                    autoPlay
                    muted
                    // controls
                    // width="1920"
                    // height="auto"
                ></video>
            </div>
        </div>
    );
}
