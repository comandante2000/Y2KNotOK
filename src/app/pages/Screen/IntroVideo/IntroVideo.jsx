import "./Intro.scss";
import { useState } from "react";
import { useRef } from "react";
export default function IntroVideo({ setNewuser }) {
  console.log("asdasdaddsxcsdlcjhsdfsd");
  const DonePlaying = () => {
    console.log("Video has ended");
    setNewuser(false);
  };
  let audio1 = "https://images.stinkyfruit.com/introbootvideo.mp4";
  return (
    <div id="pda-intro-screen">
      <div className="introvideo ">
        <video
          autoplay="true"
          id="intro"
          src={audio1}
          type="video/mp4"
          onEnded={DonePlaying}
          controls
          width="1980"
          height="auto"
        ></video>
      </div>
    </div>
  );
}
