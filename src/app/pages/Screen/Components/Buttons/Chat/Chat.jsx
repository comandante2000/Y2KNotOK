import "./Chat.scss";
import { useState, useEffect } from "react";
export default function ChatButton({ showScreen, setActive,color,press}) {



  const handleClick4 = () => {
    showScreen("MessageScreen");
    setActive("message");
  };

  return (
    <div id="chat-button">
      <div
        
        className={`button-4 ${color=="message"? "red":"black"}`}
        type="button"
        name="chat"
        onClick={press >= 5?handleClick4:null}
      ></div>
    </div>
  );
}
