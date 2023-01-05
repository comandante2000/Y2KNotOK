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
export default function Device({
  newuser,
  SetVideo,
  setNewuser,
  episodeone,
  setEpisodeOne,
}) {
  const [screen, showScreen] = useState("HomeScreen");
  const [press, setpress] = useState(0); //to make the button unclikable must click next

  const [dtime, setTime] = useState("5:55 AM");
  const [audio, setAudio] = useState(false);
  const [openchat, setOpenchat] = useState(false);

  let secondmusic = [
    "Flow1.8.1",
    "Flow1.9",
    "Flow1.10",
    "Flow1.10.1",
    "Flow1.10.2",
    "Flow1.11",
    "Flow1.13",
    "Flow1.9.2",
  ];
  useEffect(() => {
    if (episodeone === "Flow1.7.1") {
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
    // if (episodeone === "Flow1.11") {
    //   setTime("6:35 AM");
    //   setTimeout(function () {
    //     SetVideo("Episode2")
    //   }, 5000);
    // }
    if (secondmusic.includes(episodeone)) {
      setAudio(
        true
        // "https://images.stinkyfruit.com/audio_bed_ambience_mp3_v2_mom_flow.wav"
      );
      console.log("happynewyear");
    }
  });

  //cookies
  useEffect(() => {
    if (episodeone === "notallowed") {
      Cookies.set("Flow1.3", "Flow1.3done", { expires: 7 });
    }

    const Intro = Cookies.get("Flow1.3");
    if (Intro == "Flow1.3done") {
      setpress(8);
    }
  });
  //cookies

  // function handleClick() { 
  //   if (episodeone === "Flow1.11") {
  //     setTime("6:35 AM");
  //     setTimeout(function () {
  //       SetVideo("Episode2");
  //     }, 20000);
  //   }
  // }

  // useEffect(() => {
  //   // console.log("FLOW: ", episodeone);
  //   // if (episodeone === "Flow1.11") {

  //   //   function handleClick(event) {
  //   //     if (episodeone === "Flow1.11") {
  //   //       setEpisodeOne("Flow1.12");
  //   //       setTime("6:35 AM");
  //   //       setTimeout(function () {
  //   //         console.log("fdghdgdfg", episodeone);
  //   //         SetVideo("Episode2");
  //   //         setEpisodeOne("Flow1.12");
  //   //       }, 5000);
  //   //       console.log('VIDEO PLAYED: ', episodeone);
  //   //     } else {
  //   //       alert("STOP");
  //   //     }
  //   //   }
  //   // }
  //   document.addEventListener("click", handleClick());
  // }, [episodeone]);

  console.log("flow", episodeone);

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
              SetVideo={SetVideo}
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
              openchat={openchat}
              setOpenchat={setOpenchat}
            />
          )}
          {screen === "PhoneScreen" && <PhonePage dtime={dtime} />}
          {/* {screen === "Episode2" && <OutroVideo />} */}
          <Buttons
            showScreen={showScreen}
            press={press}
            setpress={setpress}
            episodeone={episodeone}
            setEpisodeOne={setEpisodeOne}
            setTime={setTime}
            screen={screen}
            openchat={openchat}
            setOpenchat={setOpenchat}
            SetVideo={SetVideo}
          />
        </div>
      </div>
      <audio autoPlay loop muted={audio ? false : true}>
        <source
          src="https://images.stinkyfruit.com/audio_bed_ambience_mp3_v2_mom_flow.mp3"
          type="audio/mp3"
        />
      </audio>
      <audio autoPlay loop muted={audio ? true : false}>
        <source
          src="https://images.stinkyfruit.com/audio_bed_ambience_mp3_v2.mp3"
          type="audio/mp3"
        />
      </audio>
      {/* {audio?<audio autoPlay loop>
        <source src="https://images.stinkyfruit.com/audio_bed_ambience_mp3_v2_mom_flow.mp3" type="audio/mp3"/>
      </audio>:
      <audio autoPlay loop>
        <source src="https://images.stinkyfruit.com/audio_bed_ambience_mp3_v2.mp3" type="audio/mp3"/>
      </audio>} */}
    </div>
  );
}
