import "./PopUp.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";

export default function PopUp({ setOpen, setEpisodeOne, video, episodeone }) {
  const [videoTime, setVideoTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      setPlaying(false);
      videoRef.current.pause();
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  const DonePlaying = () => {
    setOpen(false);
    if (
      episodeone == "allow" ||
      episodeone == "allowed" ||
      episodeone == "notallowed" && video ==="https://images.stinkyfruit.com/HR_Timothee-V-0103.mp4"
    ) {
      setOpen(false);
      setEpisodeOne("allow");
    }
    if (episodeone == "Flow1.7"&&  video ==="https://images.stinkyfruit.com/voice1_6.mp4") {
      setOpen(false);
      setEpisodeOne("Flow1.7.1");
    }
    // if (episodeone == "Flow1.7.1") {
    //   setOpen(false);
    // }
    if (episodeone == "Flow1.8.1"&&  video ==="https://images.stinkyfruit.com/Mom1_8.mp4") {
      setEpisodeOne("Flow1.9");
    }
  };
console.log(video,"video");
  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <div id="pda-pop-screen">
      <div className="black-light "></div>
      <div className="pda-boot-container  d-flex justify-content-center ">
        <div className="voice-pop-ups">
          <div className="buttons mt-2 d-flex justify-content-end align-items-center">
            <div
              className="close-button mx-2"
              type="button"
              onClick={DonePlaying}
            >
              Close
            </div>
            <div className="x-button" type="button" onClick={DonePlaying}>
              X
            </div>
          </div>
          <div className=" text-center align-items-center d-flex justify-content-center">
            <div className="video-container d-flex flex-column">
              <div>
                {video !== "" ? (
                  <video
                    className="video"
                    // autoplay="true"
                    id="video1"
                    src={video}
                    type="video/mp4"
                    onEnded={DonePlaying}
                    ref={videoRef}
                  ></video>
                ) : (
                  <video className="video" id="video1"></video>
                )}
              </div>

              <div className="timecontrols d-flex justify-content-bottom">
                <div className="controls">
                  {playing ? (
                    <div
                      className="controlsIcon--small-pause mx-1"
                      onClick={() => videoHandler("pause")}
                    />
                  ) : (
                    <div
                      className="controlsIcon--small-play mx-1"
                      onClick={() => videoHandler("play")}
                    />
                  )}
                  <div className="controlsIconb mx-1" onClick={revert} />
                  <div className="controlsIconf mx-1" onClick={fastForward} />
                </div>

                <p className="controlsTime d-flex justify-content-center a">
                  {" "}
                  {Math.floor(currentTime / 60) +
                    ":" +
                    ("0" + Math.floor(currentTime % 60)).slice(-2)}
                </p>
                <div className="time_progressbarContainer">
                  <div
                    style={{ width: `${progress}%` }}
                    className="time_progressBar"
                  ></div>
                </div>
                <p className="controlsTime">
                  {" "}
                  {Math.floor(videoTime / 60) +
                    ":" +
                    ("0" + Math.floor(videoTime % 60)).slice(-2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
