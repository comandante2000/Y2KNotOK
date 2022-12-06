import "./Device.scss";
import { useState, useEffect } from "react";
import HomeScreen from "../Screen/HomeScreen";
import Buttons from "../../pages/Screen/Components/Buttons/Buttons";
import Header from "../Header/Header";
import ChatPage from "../Intro/Chat/Chat";
import PhonePage from "../Intro/Phone/Phone";
import MailPage from "../Intro/Mail/Mail";
import VoiceMailPage from "../Intro/VoiceMail/VoiceMailPage";
import MapPage from "../Intro/Map/Map";
import Boot from "../Screen/Boot/Boot";
export default function Device() {
  const [screen, showScreen] = useState("HomeScreen");
  const [press, setpress] = useState(0); //to make the button unclikable must click next

  console.log("total press:", press);

  return (
    <div id="pda-device">
      <div className="container v2 d-flex justify-content-center gx-0 gy-0">
        <div className="box">
          <Header />
          {screen === "HomeScreen" && (
            <HomeScreen press={press} setpress={setpress} />
          )}
          {screen === "MailScreen" && <MailPage />}
          {screen === "MapScreen" && <MapPage />}
          {screen === "VoicemailScreen" && <VoiceMailPage />}
          {screen === "MessageScreen" && <ChatPage />}
          {screen === "PhoneScreen" && <PhonePage />}
          <Buttons showScreen={showScreen} press={press} />
        </div>
      </div>
    </div>
  );
}
