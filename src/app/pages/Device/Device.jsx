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

  const [screen,showScreen]= useState("HomeScreen");
 

  return ( 
    <div id="pda-device">
      <div className="container v2 d-flex justify-content-center gx-0 gy-0">
        <div className="box">
         <Header />
          {screen === "HomeScreen" && <Boot />}
          {screen === "MailScreen" && <MailPage />}
          {screen === "MapScreen" && <MapPage />}
          {screen === "VoicemailScreen" && <VoiceMailPage />}
          {screen === "MessageScreen" && <ChatPage />}
          {screen === "PhoneScreen" && <PhonePage />}
          <Buttons
            showScreen={showScreen}
          />
        </div>
      </div>
    </div>  
  );
}
