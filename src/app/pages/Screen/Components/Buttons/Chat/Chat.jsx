import "./Chat.scss";
import { useState, useEffect } from "react";
export default function ChatButton({ showScreen, setActive,color}) {



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
        onClick={handleClick4}
      
      ></div>
    </div>
  );
}
