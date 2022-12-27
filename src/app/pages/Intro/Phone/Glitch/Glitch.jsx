import "./Glitch.scss";
import { useState } from "react";
export default function Glitch({setNewuser}) {
    const DonePlaying = () => {
        setNewuser(false);
    };
    // let audio1 = "https://images.stinkyfruit.com/introbootvideo.mp4";
    // let audio1 = "https://images.stinkyfruit.com/BootScreenV9.mp4";
    let glitch = "https://images.stinkyfruit.com/Glitch_with_keypad_VP10.webm";
    // let audio1 = "https://images.stinkyfruit.com/Glitch.webm";
    return (
        <div id="pda-Glitch-screen">
            <div className="introvideo ">
                <video
                    className="video-size"
                    // autoplay="true"
                    id="intro"
                    src={glitch}
                    type="video/mp4"
                    onEnded={DonePlaying}
                    autoPlay
                    muted
                    playsinline
                    // controls
                    // width="1920"
                    // height="auto"
                ></video>
            </div>
        </div>
    );
}
