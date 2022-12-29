import "./Mail.scss";
import { useState, useEffect,useRef } from "react";

export default function MailButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
}) {
  const audioRef = useRef();
  const [btnclick, setbtnclick] = useState(0);
  const handleClick = () => {
    const audioElement = audioRef.current;
    // Play the audio
    audioElement.play();
    showScreen("MailScreen");
    setActive("mail");
  };

  const handleClick3 = () => {
    const audioElement = audioRef.current;
    // Play the audio
    audioElement.play();
    showScreen("MailScreen");
    setActive("mail");
    setEpisodeOne("allowed");
  };

  const handleClick1 = () => {
    const audioElement = audioRef.current;
    // Play the audio
    audioElement.play();
    showScreen("VoicemailScreen");
    setActive("voice");
    setEpisodeOne("allow");
    setbtnclick(function (prevCount) {
      return (prevCount += 1);
    });
  };


  return (
    <div id="mail-button">
      {episodeone == "allow" ? (
        <div
          className={`button-2 ${color == "mail" ? "red" : "black"} ${
            episodeone == "allowed"? null : "button-glow"
          }`}
          type="button"
          name="mail"
          onClick={btnclick >= 2 ? handleClick3 : handleClick1}
        ></div>
      ) : (
        <div
          className={`button-2 ${color == "mail" ? "red" : "black"} ${
            episodeone == "allow"? "button-glow" : null
          }`}
          type="button"
          name="mail"
          onClick={press >= 5 ? handleClick : null}
        ></div>
        
      )}  <audio ref={audioRef} src="https://images.stinkyfruit.com/Button_Press.wav" />
    </div>
  );
}
