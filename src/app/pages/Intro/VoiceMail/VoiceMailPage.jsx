import "./VoiceMail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import PopUp from "./Popup/PopUp";
import { useState, useEffect } from "react";

export default function VoiceMailPage({ setEpisodeOne, episodeone }) {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      name: "Timothee HR",
      date: "12/30",
      episodeone: "voicemail1.7",
      clickable: true,
      wavelenghtClass: "sound-one",
    },
    {
      name: "Krista",
      date: "12/30",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-two",
    },
    {
      name: "Mom",
      date: "12/30",
      episodeone: "Flow1.8.1",
      clickable: false,
      wavelenghtClass: "sound-three",
    },
    {
      name: "Mateo",
      date: "12/30",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-four",
    },
    {
      name: "Mom",
      date: "12/28",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-five",
    },
    {
      name: "Krista",
      date: "12/27",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-six",
    },
    {
      name: "Finn",
      date: "12/28",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-one",
    },
    {
      name: "Mom",
      date: "12/25",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-five",
    },
    {
      name: "Steve",
      date: "12/24",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-one",
    },
    {
      name: "Finn",
      date: "12/22",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-one",
    },
    {
      name: "Syvlie",
      date: "12/20",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-one",
    },
    {
      name: "Krista",
      date: "12/18",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-six",
    },
    {
      name: "Mom",
      date: "12/17",
      episodeone: "",
      clickable: false,
      wavelenghtClass: "sound-five",
    },
  ]);

  const OpenMessage = () => {
    setOpen(true);
    // alert('HELLO MFS');
    console.log("you click play button");
  };

  let videolink = "https://images.stinkyfruit.com/HR_Timothee-V-0103.mp4";

  if (episodeone == "voicemail1.7"|| episodeone === "Flow1.8.1"|| episodeone === "Flow1.8"||episodeone == "voicemail1.8"||episodeone == "voicemail1.8.1") {
    videolink = "https://images.stinkyfruit.com/voice1_6.mp4";
  }
  if (episodeone === "Flow1.8.1" || episodeone === "Flow1.9.1"|| episodeone === "Flow1.12"|| episodeone === "Flow1.10.1"||episodeone === "Flow1.11"|| episodeone === "Flow1.10") {
    videolink = "https://images.stinkyfruit.com/Mom1_8.mp4";
  }

  useEffect(() => {
    if (episodeone === "Flow1.8.1" || episodeone === "Flow1.9.1"|| episodeone === "Flow1.12"|| episodeone === "Flow1.10.1"||episodeone === "Flow1.11"|| episodeone === "Flow1.10") {
      setMessages([
        {
          name: "Mom",
          date: "12/30",
          episodeone: "Flow1.8.1",
          clickable: true,
          wavelenghtClass: "sound-five",
        },
        {
          name: "Timothee HR",
          date: "12/30",
          episodeone: "voicemail1.7",
          clickable: false,
          wavelenghtClass: "sound-one",
        },
        {
          name: "Timothee HR",
          date: "12/30",
          episodeone: "allow",
          clickable: false,
          wavelenghtClass: "sound-one",
        },
        {
          name: "Krista",
          date: "12/30",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-six",
        },
        {
          name: "Mateo",
          date: "12/30",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
        },
        {
          name: "Mom",
          date: "12/28",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-five",
        },
        {
          name: "Krista",
          date: "12/27",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-six",
        },
        {
          name: "Finn",
          date: "12/28",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
        },
        {
          name: "Mom",
          date: "12/25",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
        },
        {
          name: "Steve",
          date: "12/24",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
        },
        {
          name: "Finn",
          date: "12/22",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
        },
        {
          name: "Syvlie",
          date: "12/20",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-one",
        },
        {
          name: "Krista",
          date: "12/18",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-six",
        },
        {
          name: "Mom",
          date: "12/17",
          episodeone: "",
          clickable: false,
          wavelenghtClass: "sound-five",
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
          <Time open={open}/>
          <Header name="VoiceMail" open={open}/>
          <div className="voicemail-box-container">
            {messages.map((message, index) => (
              <div className=" d-flex py-0 new-voice-mail-container">
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
                <div className="info-container me-3 m-auto">
                  <div className="d-flex w-100">
                    <div className="email-name w-50">{message.name}</div>
                    <div className="voice-date w-50 text-end">
                      {message.date}
                    </div>
                  </div>
                  <div className="d-flex w-100 align-items-center">
                    <div
                      className="play-icon"
                      type="button"
                      onClick={message.clickable ? OpenMessage : ""}
                    ></div>
                    <div
                      className={`sound-icon ${message.wavelenghtClass}`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {open ? (
            <PopUp
              setOpen={setOpen}
              setEpisodeOne={setEpisodeOne}
              episodeone={episodeone}
              video={videolink}
            />
          ) : null}
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
