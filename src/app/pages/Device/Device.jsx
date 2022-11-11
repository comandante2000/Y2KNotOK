import "./Device.scss";
import { useState, useEffect } from "react";
import HomeScreen from "../Screen/Screen";
import Buttons from "../../pages/Screen/Components/Buttons/Buttons";
import Header from "../Header/Header";
import MessagePage from "../Intro/Message/Message";
import PhonePage from "../Intro/Phone/Phone";
import MailPage from "../Intro/Mail/Mail";
import RadioPage from "../Intro/Radio/Radio";
import MapPage from "../Intro/Map/Map";
export default function Device() {
  const [screen,showScreen]= useState("HomeScreen");

  return ( 
    <div id="pda-device">
      <div className="container v2 d-flex justify-content-center gx-0 gy-0">
        <div className="box">
         <Header />
          {screen === "HomeScreen" && <HomeScreen />}
          {screen === "MailScreen" && <MailPage />}
          {screen === "MapScreen" && <MapPage />}
          {screen === "RadioScreen" && <RadioPage />}
          {screen === "MessageScreen" && <MessagePage />}
          {screen === "PhoneScreen" && <PhonePage />}
        
          <Buttons
            showScreen={showScreen}
          />
        </div>
      </div>
    </div>  
  );
}
