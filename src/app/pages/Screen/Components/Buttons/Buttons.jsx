import "./Buttons.scss";
import VoiceMailButton from "./Voice//VoiceMail";
import MailButton from "../../Components/Buttons/Mail/Mail";
import PhoneButton from "../../Components/Buttons/Phone/Phone";
import ChatButton from "../../Components/Buttons/Chat/Chat";
import MapButton from "../../Components/Buttons/Map/Map";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Buttons({ showScreen}) {

  return (
    <div id="pda-buttons">
      <div className=" row-1">
        <div className="buttns d-inline-flex">
          <li className="button-list d-flex justify-content-evenly mt-1">
            <MailButton showScreen={showScreen}  />
            <VoiceMailButton showScreen={showScreen} />
            <PhoneButton showScreen={showScreen} />
            <ChatButton showScreen={showScreen} />
            <MapButton showScreen={showScreen} />
          </li>
        </div>
      </div>
    </div>
  );
}
