import "./Buttons.scss";
import VoiceMailButton from "./Voice//VoiceMail";
import MailButton from "../../Components/Buttons/Mail/Mail";
import PhoneButton from "../../Components/Buttons/Phone/Phone";
import ChatButton from "../../Components/Buttons/Chat/Chat";
import MapButton from "../../Components/Buttons/Map/Map";
import { Link } from "react-router-dom";
import { useState ,useRef} from "react";




export default function Buttons({showScreen}) {

const [active, setActive] = useState("");




if (active == "mail"){
  console.log("mail")
};
if (active == "voice"){
console.log("voice")

};



  return (
    <div id="pda-buttons">
      <div className=" row-1 d-flex justify-content-center">
        <div className="buttns d-inline-flex justify-content-center align-items-center">
          <li className="button-list d-flex justify-content-center align-items-center mt-1 w-100">
            <MailButton showScreen={showScreen} setActive={setActive} color = {active} />
            <VoiceMailButton showScreen={showScreen} setActive={setActive} color = {active} />
            <PhoneButton showScreen={showScreen} setActive={setActive} color = {active}/>
            <ChatButton showScreen={showScreen} setActive={setActive} color = {active}/>
            <MapButton showScreen={showScreen} setActive={setActive} color = {active} />
          </li>
        </div>
      </div>
    </div>
  );
}
