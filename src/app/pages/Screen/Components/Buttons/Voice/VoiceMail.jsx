import "./VoiceMail.scss";
import { useState, useEffect } from "react";
export default function VoiceMailButton({
  showScreen,
  setActive,
  color,
  press,
}) {


  const handleClick = () => {
    showScreen("VoicemailScreen");
    setActive("voice");

  };


  return (
    <div id="voice-button">
      <div
        className={`button-1 ${color == "voice" ? "red" : "black"}`}
        type="button"
        name="voice"
        onClick={press === 6 ? handleClick : null}
      ></div>
    </div>
  );
}
