import "./Intro.scss";
import { useState } from "react";
import { useRef } from "react";
export default function IntroVideo({ setNewuser }) {

  const DonePlaying = () => {
  
    setNewuser(false);
  };
  // let audio1 = "https://images.stinkyfruit.com/introbootvideo.mp4";
  // let audio1 = "https://images.stinkyfruit.com/BootScreenV9.mp4";
  // let audio1 = "https://images.stinkyfruit.com/Boot_Sequence_v10.mp4";
  // let audio1 = "https://images.stinkyfruit.com/Boot_Sequence_v11_final.mp4";
  let audio1 = "https://images.stinkyfruit.com/Boot-Sequence-v13.mp4";
  let audio2 = "https://images.stinkyfruit.com/Mobile-Boot-Sequencev13.mp4";
  return (
    <div id="pda-intro-screen">
      <div className="introvideo-desktop-tablet">
        <video
          className="video-size"
          // autoplay="true"
          id="intro"
          src={audio1}
          type="video/mp4"
          onEnded={DonePlaying}
          // autoPlay
          // muted
          controls
          // width="1920"
          // height="auto"
        ></video>
      </div>
      <div className="introvideo-mobile">
        <video
            className="video-size"
            // autoplay="true"
            id="intro"
            src={audio2}
            type="video/mp4"
            onEnded={DonePlaying}
            // autoPlay
            // muted
            controls
            // width="1920"
            // height="auto"
        ></video>
      </div>
    </div>
  );
}
