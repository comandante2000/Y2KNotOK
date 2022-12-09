import "./Mail.scss";
import { useState, useEffect } from "react";

export default function MailButton({ showScreen, setActive, color, press }) {
  const handleClick = () => {
    showScreen("MailScreen");
    setActive("mail");
  };
  console.log("mail press:", press);
  return (
    <div id="mail-button">
      <div
        className={`button-2 ${color == "mail" ? "red" : "black"}`}
        type="button"
        name="mail"
        onClick={press >= 5 ? handleClick : null}
      ></div>
    </div>
  );
}
