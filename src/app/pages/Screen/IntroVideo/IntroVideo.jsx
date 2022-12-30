import "./Intro.scss";
import { useState , useRef } from "react";
export default function IntroVideo({ setNewuser }) {
const [introPlaying, introSetPlaying] = useState(false);
const videoRefDest = useRef(null);
const videoRefMob = useRef(null);
  const DonePlaying = () => {
  
    setNewuser(false);
  };

  const videoHandler = (control) => {
    if (control === "play") {
        videoRefDest.current.play();
        videoRefMob.current.play();
        introSetPlaying(true);
    } else if (control === "pause") {
        introSetPlaying(false);
        videoRefDest.current.pause();
        videoRefMob.current.pause();
    }
  };

  let audio1 = "https://images.stinkyfruit.com/Boot-Sequence-v13.mp4";
  let audio2 = "https://images.stinkyfruit.com/Mobile-Boot-Sequence-v14.mp4";
  return (
    <div id="pda-intro-screen">
      <div className="introvideo-desktop-tablet">
        <video
          className="video video-size"
          // autoplay="true"
          id="intro"
          src={audio1}
          type="video/mp4"
          onEnded={DonePlaying}
          ref={videoRefDest}
          // autoPlay
          // muted
          // controls
          // width="1920"
          // height="auto"
        ></video>
      </div>
      <div className="introvideo-mobile">
        <video
            className="video video-size"
            // autoplay="true"
            id="intro"
            src={audio2}
            type="video/mp4"
            onEnded={DonePlaying}
            ref={videoRefMob}
            // autoPlay
            // muted
            // controls
            // width="1920"
            // height="auto"
        ></video>
      </div>
      <div className="timecontrols">
          <div className="controls">
              {introPlaying  ? (
                  <div id="pause-id" className="pause-container">
                      <div
                          className="controlsIcon--small-pause mx-1"
                          onClick={() => videoHandler("pause")}
                      />
                  </div>
              ) : (
                  <div id="play-id" className="play-container" onClick={() => videoHandler("play")} type="button">
                      <div
                          className="controlsIcon--small-play mx-1"
                          onClick={() => videoHandler("play")}
                      />
                  </div>
              )}
          </div>
      </div>
    </div>
  );
}
