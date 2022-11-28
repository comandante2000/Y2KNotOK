import "./VoiceMail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import { useState } from "react";
export default function VoiceMailPage() {
  const [open, setOpen] = useState(false);

  const OpenMessage = () => {
    setOpen(true);
    console.log("you click play button");
  };
  //voicemail
  return (
    <div id="pda-voicemail-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header name="VoiceMail" />

          <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-2 g-5">
            <div className="red-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column  justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="play-icon"
                  type="button"
                  onClick={OpenMessage}
                ></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-2 g-5 border-top-0">
            <div className="red-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column  justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="play-icon"
                  type="button"
                  onClick={OpenMessage}
                ></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-2 g-5 border-top-0">
            <div className="unred-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column  justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-2 g-5 border-top-0">
            <div className="unred-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column  justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-2 g-5 border-top-0">
            <div className="unred-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column  justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-2 g-5 border-top-0">
            <div className="unred-icon "></div>
            <div className="voice-icon "></div>
            <div className="d-flex align-items-start flex-column justify-content-evenly">
              <div className="d-flex justify-content-center">
                <div className="email-name">Timothee</div>
                <div className="ms-5">12/30</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="play-icon" type="button"></div>
                <div className="sound-icon mt-1"></div>
              </div>
            </div>
          </div>
          
            {open ? (
              <div className="d-flex justify-content-center">
                <div className="light"></div>
              </div>
            ) : null}
            {open ? (
              <div className="d-flex justify-content-center">
                <div className="voice-pop-up"></div>
              </div>
            ) : null}
          
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
