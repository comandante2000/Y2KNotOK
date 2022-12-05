import "./Mail.scss";

import { useState, useEffect } from "react";

export default function MailButton({ showScreen, setActive, color }) {
  const handleClick = () => {
    showScreen("MailScreen");
    setActive("mail");
  };

  return (
    <div id="mail-button">
      <div
        className={`button-2 ${color == "mail" ? "red" : "black"}`}
        type="button"
        name="mail"
        onClick={handleClick}
      ></div>
    </div>
  );
}
