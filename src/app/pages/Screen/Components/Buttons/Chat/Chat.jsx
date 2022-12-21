import "./Chat.scss";
import { useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../../../modules/db";

export default function ChatButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
}) {
  const handleClick4 = () => {
    showScreen("MessageScreen");
    setActive("message");
    if (episodeone === "Flow1.10") {
      setEpisodeOne("Flow1.10.1");
    }
  };

  const chatButtonStaticAsset = useLiveQuery(
    () => db.assets.where('title').equalsIgnoreCase('pda-device-button-chat').toArray(),
  );
  
  return (
    <div id="chat-button">
      <div
        className={`button-4 ${color == "message" ? "red" : "black"} ${
          episodeone === "voicemail1.8" ||
          episodeone === "voicemail1.8" ||
          episodeone === "Flow1.10"
            ? "button-glow"
            : null
        }`}
        style={chatButtonStaticAsset && chatButtonStaticAsset.length !== 0 ? {backgroundImage: `url(${URL.createObjectURL(chatButtonStaticAsset[0].blob)})`} : null}
        type="button"
        name="chat"
        onClick={press >= 5 ? handleClick4 : null}
      ></div>
    </div>
  );
}
