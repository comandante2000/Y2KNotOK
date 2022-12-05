import "./VoiceMail.scss";
import { useState, useEffect } from "react";
export default function VoiceMailButton({ showScreen,setActive ,color}) {





  const handleClick = () => {
    showScreen("VoicemailScreen");
    setActive("voice");
    
  };

  return (
    <div id="voice-button">
      <div
        className={`button-1 ${color=="voice"? "red":"black"}`}
        type="button"
        name="voice"
        onClick={handleClick}
      ></div>
    </div>
  );
}
