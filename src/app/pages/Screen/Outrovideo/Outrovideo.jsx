import "./Outrovideo.scss";
import { useState } from "react";
import { useRef } from "react";
export default function OutroVideo({ setNewuser,SetVideo ,setEpisodeOne}) {

  const DonePlaying = () => {
    setNewuser(false);
    SetVideo("");
    setEpisodeOne("Flow1.13");
  };
  // let audio1 = "https://images.stinkyfruit.com/Episode-1-Outro-v1.mp4";
  let audio1 = "https://images.stinkyfruit.com/Episode1-Outro-v2.mp4";
  return (
    <div id="pda-outro-screen">
      <div className="introvideo ">
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
    </div>
  );
}
