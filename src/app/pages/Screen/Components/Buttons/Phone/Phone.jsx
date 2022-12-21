import "./Phone.scss";
import { useState, useEffect } from "react";
import { db } from "../../../../../modules/db";
import { useLiveQuery } from "dexie-react-hooks";

export default function PhoneButton({ showScreen, setActive, color, press }) {
  const handleClick3 = () => {
    showScreen("PhoneScreen");
    setActive("phone");
  };

  const phoneButtonStaticAsset = useLiveQuery(
    () => db.assets.where('title').equalsIgnoreCase('pda-device-button-phone').toArray(),
  );
  
  return (
    <div id="phone-button">
      <div
        className={`button-3 ${color == "phone" ? "red" : "black"}`}
        // style={phoneButtonStaticAsset && phoneButtonStaticAsset.length !== 0 ? {backgroundImage:  `url(${URL.createObjectURL(phoneButtonStaticAsset[0].blob)})`} : null }
        type="button"
        name="phone"
        onClick={press >= 5 ? handleClick3 : null}
      ></div>
    </div>
  );
}
