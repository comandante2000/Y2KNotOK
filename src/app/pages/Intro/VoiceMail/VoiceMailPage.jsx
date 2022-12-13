import "./VoiceMail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import PopUp from "./Popup/PopUp";
import { useState } from "react";
export default function VoiceMailPage({setAccesmail,accessmail}) {
  const [open, setOpen] = useState(false);

  const OpenMessage = () => {
    setOpen(true);
    console.log("you click play button");
  };

let videolink ="https://images.stinkyfruit.com/HR_Timothee-V-0103.mp4"
if (accessmail =="voicemail1.7"){

videolink ="https://images.stinkyfruit.com/voice1_6.mp4"

}
  
  return (
    <div id="pda-voicemail-screen">
      <div className="row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className={`inner-row-center ${open?"voiceplay":"unvoiceplay"}`}>
          <Time />
          <Header name="VoiceMail" />
          <div className="voicemail-box-container">
            <div className=" d-flex py-0 new-voice-mail-container">
              <div className="icon-container d-flex align-items-center">
                <div className="red-icon "></div>
                <div className="voice-icon "></div>
              </div>
              <div className="info-container me-3 m-auto">
                <div className="d-flex w-100">
                  <div className="email-name w-50">Timothee HR</div>
                  <div className="voice-date w-50 text-end">12/30</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button" onClick={OpenMessage}></div>
                  <div className="sound-icon sound-one"></div>
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
                  <div className="email-name w-50">Mom</div>
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
                  <div className="email-name w-50">Krista</div>
                  <div className="voice-date w-50 text-end">12/30</div>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="play-icon" type="button"></div>
                  <div className="sound-icon sound-six"></div>
                </div>
              </div>
            </div>
          </div>
          {open? <PopUp setOpen={setOpen} setAccesmail={setAccesmail} accessmail={accessmail} video={videolink}/> : null}
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
