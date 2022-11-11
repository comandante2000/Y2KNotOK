import "./VoiceMail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
export default function VoiceMailPage() {
  //voicemail
  return (
    <div id="pda-voicemail-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header />
          <div className=" d-flex justify-content-evenly mx-2 border border-dark py-0 g-5">
            <div className="red-icon "></div>
            <div className="cam-icon "></div>
            <div className="d-flex align-items-start flex-column bd-highlight justify-content-evenly">
              <div>
                <div className="email-name mx-2 ">Timothee</div>
                <div className="d-flex justify-content-center">
                  <div className="pay-icon"></div>
                  <div className="sound-icon mt-1"></div>
                </div>
                <div className="email-subject mx-2 mb-0 ">HR</div>
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-evenly mx-2 border border-dark py-0 g-5">
            <div className="red-icon "></div>
            <div className="cam-icon "></div>
            <div className="d-flex align-items-start flex-column bd-highlight justify-content-evenly">
              <div>
                <div className="email-name mx-2 ">Timothee</div>
                <div className="d-flex justify-content-center">
                  <div className="pay-icon"></div>
                  <div className="sound-icon mt-1"></div>
                </div>
             
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-evenly mx-2 border border-dark py-0 g-5">
            <div className="red-icon "></div>
            <div className="cam-icon "></div>
            <div className="d-flex align-items-start flex-column bd-highlight justify-content-evenly">
              <div>
                <div className="email-name mx-2 ">Timothee</div>
                <div className="d-flex justify-content-center">
                  <div className="pay-icon"></div>
                  <div className="sound-icon mt-1"></div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
