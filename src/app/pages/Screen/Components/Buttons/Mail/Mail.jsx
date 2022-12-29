import "./Mail.scss";
import { useState, useEffect, useRef } from "react";

export default function MailButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
  screen,
}) {
  const audioRef = useRef();
  const audioRefmail = useRef();
  const [btnclick, setbtnclick] = useState(0);
  const handleClick = () => {
    setbtnclick(btnclick + 1);

    const audioElement = audioRef.current;
    // Play the audio
    audioRef.current.currentTime = 0;
    audioElement.play();
    if (btnclick >= 2) {
      showScreen("MailScreen");
      setActive("mail");
    }
  };
  useEffect(() => {
    if (screen !== "MailScreen") {
      setbtnclick(0);
    }
  }, [screen]);

  // Play the audio 3 times mail

  useEffect(() => {
    const audioElementmail = audioRefmail.current;
    if (episodeone == "allow") {
      audioElementmail.play();
    }
  }, );

  const handleClick3 = () => {
    const audioElement = audioRef.current;
    // Play the audio
    audioRef.current.currentTime = 0;
    audioElement.play();
    showScreen("MailScreen");
    setActive("mail");
    setEpisodeOne("allowed");
  };

  const handleClick1 = () => {
    const audioElement = audioRef.current;
    // Play the audio
    audioRef.current.currentTime = 0;
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
            episodeone == "allowed" ? null : "button-glow"
          }`}
          type="button"
          name="mail"
          onClick={btnclick >= 2 ? handleClick3 : handleClick1}
        ></div>
      ) : (
        <div
          className={`button-2 ${color == "mail" ? "red" : "black"} ${
            episodeone == "allow" ? "button-glow" : null
          }`}
          type="button"
          name="mail"
          onClick={press >= 5 ? handleClick : null}
        ></div>
      )}{" "}
      <audio
        ref={audioRef}
        src="https://images.stinkyfruit.com/Button_Press.wav"
      />
      <audio
        loop
        ref={audioRefmail}
        src="https://images.stinkyfruit.com/New_Button_Blink_mail3.wav"
      />
    </div>
  );
}
