import "./Mail.scss";
import { useState, useEffect } from "react";
export default function MailButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
}) {
  const [mail, setmail] = useState(false);
  const [btnclick, setbtnclick] = useState(0);

  const handleButtonGlowing = () => {};

  const handleClick = () => {
    showScreen("MailScreen");
    setActive("mail");
  };

  const handleClick3 = () => {
    showScreen("MailScreen");
    setActive("mail");
    setEpisodeOne("allowed");
  };

  const handleClick1 = () => {
    showScreen("VoicemailScreen");
    setActive("voice");
    setEpisodeOne("allow");
    setbtnclick(function (prevCount) {
      return (prevCount += 1);
    });
  };

  console.log(episodeone, ":accelemal");
  console.log(btnclick, ":btn");
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
      )}
    </div>
  );
}
