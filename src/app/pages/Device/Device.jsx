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
import Cookies from "js-cookie";
import OutroVideo from "../Screen/Outrovideo/Outrovideo";
export default function Device({ newuser ,SetVideo ,setNewuser}) {
  const [screen, showScreen] = useState("HomeScreen");
  const [press, setpress] = useState(0); //to make the button unclikable must click next
  const [episodeone, setEpisodeOne] = useState("notallowed");
  const [dtime, setTime] = useState("5:55 AM");

  useEffect(() => {
  
    if (episodeone === "voicemail1.8") {
      setTime("6:15 AM");
    }
    if (episodeone === "Flow1.9.1") {
      setTime("6:20 AM");
    }
    if (episodeone === "Flow1.10") {
      setTime("6:25 AM");
    }
    if (episodeone === "Flow1.11") {
      setTime("6:25 AM");
    }
    if (episodeone === "Flow1.11") {
      setTime("6:35 AM");
      setTimeout(function() {
      SetVideo("Episode2");
      }, 5000);
    }
  });
  
//cookies
  useEffect(() => {
    if (episodeone === "notallowed") {
      Cookies.set("Flow1.3", "Flow1.3done", { expires: 7 });
    }
  
    const Intro = Cookies.get('Flow1.3'); 
      if (Intro == "Flow1.3done"){
        setpress(8);
      }

  });
//cookies

  return (
    <div id="pda-device">
      <div
        className={`container v2 d-flex justify-content-center gx-0 gy-0 ${
          !newuser ? "deviceopacity" : ""
        }`}
      >
        <div className="box">
          <Header />
          {screen === "HomeScreen" && (
            <HomeScreen press={press} setpress={setpress} dtime={dtime} />
          )}
          {screen === "MailScreen" && (
            <MailPage
              episodeone={episodeone}
              setEpisodeOne={setEpisodeOne}
              dtime={dtime}
            />
          )}
          {screen === "MapScreen" && (
            <MapPage
              episodeone={episodeone}
              setEpisodeOne={setEpisodeOne}
              dtime={dtime}
            />
          )}
          {screen === "VoicemailScreen" && (
            <VoiceMailPage
              setEpisodeOne={setEpisodeOne}
              episodeone={episodeone}
              dtime={dtime}
            />
          )}
          {screen === "MessageScreen" && (
            <ChatPage
              episodeone={episodeone}
              setEpisodeOne={setEpisodeOne}
              dtime={dtime}
            />
          )}
          {screen === "PhoneScreen" && <PhonePage dtime={dtime} />}
          {screen === "Episode2" && <OutroVideo />}
          <Buttons
            showScreen={showScreen}
            press={press}
            setpress={setpress}
            episodeone={episodeone}
            setEpisodeOne={setEpisodeOne}
            setTime={setTime}
          />
        </div>
      </div>
      <audio autoPlay loop>
        <source
          src="https://images.stinkyfruit.com/audio_bed_ambience_mp3.mp3"
          type="audio/wav"
        />
      </audio>
    </div>
  );
}
