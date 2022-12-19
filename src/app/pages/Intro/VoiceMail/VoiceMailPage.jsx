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
      wavelenghtClass:"sound-two",
    },
    { name: "Krista", date: "12/30", episodeone: "", clickable: false },
    {
      name: "Mom",
      date: "12/30",
      episodeone: "replyflow1.8.1",
      clickable: false,
      wavelenghtClass:"sound-one",
    },
    { name: "Mateo", date: "12/30", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
    { name: "Mom", date: "12/28", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
    { name: "Krista", date: "12/27", episodeone: "", clickable: false ,  wavelenghtClass:"sound-one"},
    { name: "Finn", date: "12/28", episodeone: "", clickable: false ,  wavelenghtClass:"sound-one"},
    { name: "Mom", date: "12/25", episodeone: "", clickable: false ,  wavelenghtClass:"sound-one"},
    { name: "Steve", date: "12/24", episodeone: "", clickable: false ,  wavelenghtClass:"sound-one"},
    { name: "Finn", date: "12/22", episodeone: "", clickable: false ,  wavelenghtClass:"sound-one"},
    { name: "Syvlie", date: "12/20", episodeone: "", clickable: false ,  wavelenghtClass:"sound-one"},
    { name: "Krista", date: "12/18", episodeone: "", clickable: false ,  wavelenghtClass:"sound-one"},
    { name: "Mom", date: "12/17", episodeone: "", clickable: false ,  wavelenghtClass:"sound-one"},
  ]);

  const OpenMessage = () => {
    setOpen(true);
    // alert('HELLO MFS');
    console.log("you click play button");
  };

  let videolink = "https://images.stinkyfruit.com/HR_Timothee-V-0103.mp4";

  if (episodeone == "voicemail1.7") {
    videolink = "https://images.stinkyfruit.com/voice1_6.mp4";
  }
  if (episodeone == "replyflow1.8.1") {
    videolink = "https://images.stinkyfruit.com/Mom1_8.mp4";
  }

  useEffect(() => {
    if (episodeone === "replyflow1.8.1") {
      setMessages([
        {
          name: "Mom",
          date: "12/30",
          episodeone: "replyflow1.8.1",
          clickable: true,
          wavelenghtClass:"sound-one",
        },
        {
          name: "Timothee HR",
          date: "12/30",
          episodeone: "voicemail1.7",
          clickable: false,
          wavelenghtClass:"sound-one",
        },
        { name: "Krista", date: "12/30", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
        { name: "Mateo", date: "12/30", episodeone: "", clickable: false , wavelenghtClass:"sound-one" },
        { name: "Mom", date: "12/28", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
        { name: "Krista", date: "12/27", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
        { name: "Finn", date: "12/28", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
        { name: "Mom", date: "12/25", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
        { name: "Steve", date: "12/24", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
        { name: "Finn", date: "12/22", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
        { name: "Syvlie", date: "12/20", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
        { name: "Krista", date: "12/18", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
        { name: "Mom", date: "12/17", episodeone: "", clickable: false , wavelenghtClass:"sound-one"},
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
          <Time />
          <Header name="VoiceMail" />
          <div className="voicemail-box-container">
            {messages.map((message, index) => (
                <div className=" d-flex py-0 new-voice-mail-container">
                  <div className="icon-container d-flex align-items-center">
                    <div
                        className={
                          message.name === "Timothee HR" &&
                          episodeone === "notallowed"
                              ? "red-icon"
                              : message.episodeone === episodeone
                                  ? "red-icon"
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
                      <div className={`sound-icon ${message.wavelenghtClass}`}>
                      </div>
                    </div>
                  </div>
                </div>
            ))}

            {/* <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Krista</div>
                  <div className="voice-date w-50 text-end">12/30</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-three"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className={episodeone==="replyflow1.8.1"?"red-icon":"unred-icon "}></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Mom</div>
                  <div className="voice-date w-50 text-end">12/30</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"  onClick={OpenMessage}></div>
                  <div className="sound-icon sound-two"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Mateo</div>
                  <div className="voice-date w-50 text-end">12/30</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-four"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Mom</div>
                  <div className="voice-date w-50 text-end">12/30</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-five"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Krista</div>
                  <div className="voice-date w-50 text-end">12/30</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-six"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Finn</div>
                  <div className="voice-date w-50 text-end">12/28</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-six"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Mom</div>
                  <div className="voice-date w-50 text-end">12/25</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-six"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Steve</div>
                  <div className="voice-date w-50 text-end">12/20</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-six"></div>
                </div>
              </div>
            </div>


            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Finn</div>
                  <div className="voice-date w-50 text-end">12/22</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-six"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Syvlie</div>
                  <div className="voice-date w-50 text-end">12/20</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-six"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Krista</div>
                  <div className="voice-date w-50 text-end">12/28</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-six"></div>
                </div>
              </div>
            </div>

            <div className=" d-flex py-0 voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="unred-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Mom</div>
                  <div className="voice-date w-50 text-end">12/17</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-six"></div>
                </div>
              </div>
            </div> */}
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
