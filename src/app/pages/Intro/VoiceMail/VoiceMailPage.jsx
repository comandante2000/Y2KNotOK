import "./VoiceMail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import PopUp from "./Popup/PopUp";
import { useState, useEffect } from "react";

export default function VoiceMailPage({ setEpisodeOne, episodeone, dtime }) {
  const [open, setOpen] = useState(false);
  const [videoURI, setVideoURI] = useState("");
  console.log(episodeone)
  const [messages, setMessages] = useState([
    {
      name: "Timothee HR",
      date: "12/30",
      episodeone: "voicemail1.7",
      clickable: true,
      wavelenghtClass: "sound-one",
      videolink: "https://images.stinkyfruit.com/HR_Timothee-V-0103.mp4",
    },
    {
      name: "Krista",
      date: "12/30",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-two",
      videolink: "",
    },
    {
      name: "Mom",
      date: "12/30",
      episodeone: "Flow1.8.1",
      clickable: false,
      wavelenghtClass: "sound-three",
      videolink: "",
    },
    {
      name: "Mateo",
      date: "12/30",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-four",
      videolink: "",
    },
    {
      name: "Mom",
      date: "12/28",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-five",
      videolink: "",
    },
    {
      name: "Krista",
      date: "12/27",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-six",
      videolink: "",
    },
    {
      name: "Finn",
      date: "12/28",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-one",
      videolink: "",
    },
    {
      name: "Mom",
      date: "12/25",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-five",
      videolink: "",
    },
    {
      name: "Steve",
      date: "12/24",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-one",
      videolink: "",
    },
    {
      name: "Finn",
      date: "12/22",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-one",
      videolink: "",
    },
    {
      name: "Syvlie",
      date: "12/20",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-one",
      videolink: "",
    },
    {
      name: "Krista",
      date: "12/18",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-six",
      videolink: "",
    },
    {
      name: "Mom",
      date: "12/17",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-five",
      videolink: "",
    },
  ]);

  const OpenMessage = (videolink) => {
    setVideoURI(videolink);
    setOpen(true);
  };

  useEffect(() => {
    if (episodeone === "voicemail1.7"||episodeone === "voicemail1.8") {
      setMessages([
        {
          name: "Timothee HR",
          date: "12/30",
          episodeone: "voicemail1.7",
          clickable: true,
          wavelenghtClass: "sound-one",
          videolink: "https://images.stinkyfruit.com/voice1_6.mp4",
        },
        {
          name: "Timothee HR",
          date: "12/30",
          episodeone: "allow",
          clickable: true,
          wavelenghtClass: "sound-one",
          videolink: "https://images.stinkyfruit.com/HR_Timothee-V-0103.mp4",
        },
        {
          name: "Krista",
          date: "12/30",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-six",
          videolink: "",
        },
        {
          name: "Mateo",
          date: "12/30",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Mom",
          date: "12/28",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-five",
          videolink: "",
        },
        {
          name: "Krista",
          date: "12/27",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-six",
          videolink: "",
        },
        {
          name: "Finn",
          date: "12/28",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Mom",
          date: "12/25",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Steve",
          date: "12/24",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Finn",
          date: "12/22",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Syvlie",
          date: "12/20",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Krista",
          date: "12/18",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-six",
          videolink: "",
        },
        {
          name: "Mom",
          date: "12/17",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-five",
          videolink: "",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (
      episodeone === "Flow1.8.1" ||
      episodeone === "Flow1.9.1" ||
      episodeone === "Flow1.9" ||
      episodeone === "Flow1.12" ||
      episodeone === "Flow1.10.1" ||
      episodeone === "Flow1.11" ||
      episodeone === "Flow1.10"
    ) {
      setMessages([
        {
          name: "Mom",
          date: "12/30",
          episodeone: "Flow1.8.1",
          clickable: true,
          wavelenghtClass: "sound-five",
          videolink: "https://images.stinkyfruit.com/Mom1_8.mp4",
        },
        {
          name: "Timothee HR",
          date: "12/30",
          episodeone: "voicemail1.7",
          clickable: true,
          wavelenghtClass: "sound-one",
          videolink: "https://images.stinkyfruit.com/voice1_6.mp4",
        },
        {
          name: "Timothee HR",
          date: "12/30",
          episodeone: "allow",
          clickable: true,
          wavelenghtClass: "sound-one",
          videolink: "https://images.stinkyfruit.com/HR_Timothee-V-0103.mp4",
        },
        {
          name: "Krista",
          date: "12/30",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-six",
          videolink: "",
        },
        {
          name: "Mateo",
          date: "12/30",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Mom",
          date: "12/28",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-five",
          videolink: "",
        },
        {
          name: "Krista",
          date: "12/27",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-six",
          videolink: "",
        },
        {
          name: "Finn",
          date: "12/28",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Mom",
          date: "12/25",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Steve",
          date: "12/24",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Finn",
          date: "12/22",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Syvlie",
          date: "12/20",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
          videolink: "",
        },
        {
          name: "Krista",
          date: "12/18",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-six",
          videolink: "",
        },
        {
          name: "Mom",
          date: "12/17",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-five",
          videolink: "",
        },
      ]);
    }
  }, []);

  return (
    <div id="pda-voicemail-screen">
      <div className="row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div
          className={`inner-row-center ${open ? "voiceplay" : "unvoiceplay"}`}
        >
          <Time open={open} time={dtime} />
          <Header name="VoiceMail" open={open} />
          <div className="voicemail-box-container">
            {" "}
            {messages.map((message, index) => (
              <div key={index} className="box-container">
                <div className=" d-flex py-0 new-voice-mail-container" type={message.clickable?"button":"text"}
                        onClick={
                          message.clickable
                            ? () => OpenMessage(message.videolink)
                            : null
                        }>
                  <div className="icon-container d-flex align-items-center">
                    <div
                      className={
                        message.name === "Timothee HR" &&
                        episodeone === "notallowed"
                          ? "blink-red-icon"
                          : message.episodeone === episodeone
                          ? "blink-red-icon"
                          : "unred-icon"
                      }
                    ></div>
                    <div className="voice-icon "></div>
                  </div>
                  <div className="info-container me-3 m-auto" >
                    <div className="d-flex w-100" >
                      <div className="email-name w-50">{message.name}</div>
                      <div className="voice-date w-50 text-end">
                        {message.date}
                      </div>
                    </div>
                    <div className="d-flex w-100 align-items-center">
                      <div
                        className="play-icon"
                        
                      ></div>
                      <div
                        className={`sound-icon ${message.wavelenghtClass}`}
                      ></div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            ))}
          </div>
          {open ? (
            <PopUp
              setOpen={setOpen}
              setEpisodeOne={setEpisodeOne}
              episodeone={episodeone}
              video={videoURI}
            />
          ) : null}
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
