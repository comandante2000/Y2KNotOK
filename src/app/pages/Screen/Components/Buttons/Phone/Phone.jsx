import "./Phone.scss";
import { useState, useEffect } from "react";

export default function PhoneButton({ showScreen, setActive, color, press }) {
  const handleClick3 = () => {
    showScreen("PhoneScreen");
    setActive("phone");
  };

  return (
    <div id="phone-button">
      <div
        className={`button-3 ${color == "phone" ? "red" : "black"}`}
        type="button"
        name="phone"
        onClick={press >= 5 ? handleClick3 : null}
      ></div>
    </div>
  );
}
