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

export default function Device() {
  const [screen, showScreen] = useState("HomeScreen");
  const [press, setpress] = useState(0); //to make the button unclikable must click next
  const [episodeone, setEpisodeOne] = useState("notallowed");
  
  return (
    <div id="pda-device">
      <div className="container v2 d-flex justify-content-center gx-0 gy-0">
        <div className="box">
          <Header />
          {screen === "HomeScreen" && (
            <HomeScreen press={press} setpress={setpress} />
          )}
          {screen === "MailScreen" && (
            <MailPage episodeone={episodeone} setEpisodeOne={setEpisodeOne} />
          )}
          {screen === "MapScreen" && (
            <MapPage episodeone={episodeone} setEpisodeOne={setEpisodeOne} />
          )}
          {screen === "VoicemailScreen" && (
            <VoiceMailPage
              setEpisodeOne={setEpisodeOne}
              episodeone={episodeone}
            />
          )}
          {screen === "MessageScreen" && (
            <ChatPage episodeone={episodeone} setEpisodeOne={setEpisodeOne} />
          )}
          {screen === "PhoneScreen" && <PhonePage />}
          <Buttons
            showScreen={showScreen}
            press={press}
            setpress={setpress}
            episodeone={episodeone}
            setEpisodeOne={setEpisodeOne}
          />
        </div>
      </div>
      <audio autoPlay loop>
        <source src="https://images.stinkyfruit.com/audio_bed_ambience_mp3.mp3" type="audio/wav" />
      </audio>
    </div>
  );
}
