import "./Chat.scss";
import { useState, useEffect } from "react";
export default function ChatButton({
  showScreen,
  setActive,
  color,
  press,
  accessmail,
  setAccesmail,
}) {
  const handleClick4 = () => {
    showScreen("MessageScreen");
    setActive("message");
  };
console.log(accessmail,"the value of accesmail in chat");
  return (
    <div id="chat-button">
      <div
        className={`button-4 ${color == "message" ? "red" : "black"} ${
          accessmail === "voicemail1.8" ? "button-glow" : null
        }`}
        type="button"
        name="chat"
        onClick={press >= 5 ? handleClick4 : null}
      ></div>
    </div>
  );
}
