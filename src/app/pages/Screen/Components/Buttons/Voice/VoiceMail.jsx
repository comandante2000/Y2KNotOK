import "./VoiceMail.scss";
import { useState, useEffect } from "react";
export default function VoiceMailButton({
  showScreen,
  setActive,
  color,
  press,
  setpress,
}) {


  const handleClick = () => {
    showScreen("VoicemailScreen");
    setActive("voice");
    setpress(function (prevCount) {
      return (prevCount += 1);
    });
  };

  return (
    <div id="voice-button">
      <div
        className={`button-1 ${color == "voice" ? "red" : "black"} ${
          press === 6 ? "button-glow" : null
        }`}
        type="button"
        name="voice"
        onClick={press >= 5 ? handleClick : null}
      ></div>
    </div>
  );
}
