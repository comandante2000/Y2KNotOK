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
  const [accessmail, setAccesmail] = useState("notallowed");
  


  return (
    <div id="pda-device">
      <div className="container v2 d-flex justify-content-center gx-0 gy-0">
        <div className="box">
          <Header />
          {screen === "HomeScreen" && (
            <HomeScreen press={press} setpress={setpress} />
          )}
          {screen === "MailScreen" && <MailPage accessmail={accessmail} setAccesmail={setAccesmail}/>}
          {screen === "MapScreen" && <MapPage accessmail={accessmail} setAccesmail={setAccesmail}/>}
          {screen === "VoicemailScreen" && <VoiceMailPage setAccesmail={setAccesmail} accessmail={accessmail}/>}
          {screen === "MessageScreen" && <ChatPage accessmail={accessmail} setAccesmail={setAccesmail}/>}
          {screen === "PhoneScreen" && <PhonePage />}
          <Buttons showScreen={showScreen} press={press} setpress={setpress} accessmail={accessmail} setAccesmail={setAccesmail}/>
        </div>
      </div>
    </div>
  );
}
