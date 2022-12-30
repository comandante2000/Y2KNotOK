import "./Outrovideo.scss";
import { useState } from "react";
import { useRef } from "react";
export default function OutroVideo({ setNewuser,SetVideo ,setEpisodeOne}) {
  const [outroPlaying, outroSetPlaying] = useState(false);
  const videoRefDest = useRef(null);
  const videoRefMob = useRef(null);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRefDest.current.play();
      videoRefMob.current.play();
      outroSetPlaying(true);
    } else if (control === "pause") {
      outroSetPlaying(false);
      videoRefDest.current.pause();
      videoRefMob.current.pause();
    }
  };

  const DonePlaying = () => {
    setNewuser(false);
    SetVideo("");
    setEpisodeOne("Flow1.13");
  };
  // let audio1 = "https://images.stinkyfruit.com/Episode-1-Outro-v1.mp4";
  let audio1 = "https://images.stinkyfruit.com/Episode1-Outro-v2.mp4";
  let audio2 = "https://images.stinkyfruit.com/Mobile-outro-v3.mp4";
  return (
    <div id="pda-outro-screen">
      <div className="outrovideo ">
        <div className="outrovideo-desktop-tablet">
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
              // width="1920"
              // height="auto"
          ></video>
        </div>
        <div className="outrovideo-mobile">
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
              // width="1920"
              // height="auto"
          ></video>
        </div>
        <div className="timecontrols">
          <div className="controls">
            {outroPlaying  ? (
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
    </div>
  );
}
