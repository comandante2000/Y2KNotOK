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
import Cookies from 'js-cookie';
export default function Device() {
  const [screen, showScreen] = useState("HomeScreen");
  const [press, setpress] = useState(0); //to make the button unclikable must click next
  const [episodeone, setEpisodeOne] = useState("notallowed");
  const [dtime,setTime] = useState("Monday 5:55 AM");


  useEffect(() => {

    if(episodeone === "voicemail1.8"){
      setTime("Monday 6:15 AM")
    }
    if(episodeone === "Flow1.9.1"){
      setTime("Monday 6:25 AM")
    }
    if(episodeone === "Flow1.12"){
      setTime("Monday 6:35 AM")
    }
    
    });
  return (
    <div id="pda-device">
      <div className="container v2 d-flex justify-content-center gx-0 gy-0">
        <div className="box">
          <Header />
          {screen === "HomeScreen" && (
            <HomeScreen press={press} setpress={setpress} dtime={dtime} />
          )}
          {screen === "MailScreen" && (
            <MailPage episodeone={episodeone} setEpisodeOne={setEpisodeOne} dtime={dtime}/>
          )}
          {screen === "MapScreen" && (
            <MapPage episodeone={episodeone} setEpisodeOne={setEpisodeOne} dtime={dtime} />
          )}
          {screen === "VoicemailScreen" && (
            <VoiceMailPage
              setEpisodeOne={setEpisodeOne}
              episodeone={episodeone} dtime={dtime}
            />
          )}
          {screen === "MessageScreen" && (
            <ChatPage episodeone={episodeone} setEpisodeOne={setEpisodeOne} dtime={dtime}/>
          )}
          {screen === "PhoneScreen" && <PhonePage dtime={dtime}/>}
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
        <source src="https://images.stinkyfruit.com/audio_bed_ambience_mp3.mp3" type="audio/wav" />
      </audio>
    </div>
  );
}
