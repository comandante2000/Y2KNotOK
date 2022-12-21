import { db } from "../../../../../modules/db";
import "./VoiceMail.scss";
import { useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";

export default function VoiceMailButton({
  showScreen,
  setActive,
  color,
  press,
  setpress,
  episodeone,
  setEpisodeOne,
}) {
  const handleClick = () => {
    showScreen("VoicemailScreen");
    setActive("voice");
    setpress(function (prevCount) {
      return (prevCount += 1);
    });
    if (episodeone == "mailpop") {
      setEpisodeOne("voicemail1.7");
    }
    if (episodeone == "Flow1.8") {
      setEpisodeOne("Flow1.8.1");
    }
  };

  const voicemailStaticAsset = useLiveQuery(
    () => db.assets.where('title').equalsIgnoreCase('pda-device-button-voicemail').toArray(),
  );
  
  return (
    <div id="voice-button">
      <div
        className={`button-1 ${color == "voice" ? "red" : "black"} ${
          press === 6 || episodeone == "mailpop" || episodeone == "Flow1.8"
            ? "button-glow"
            : null
        }`}
        style={voicemailStaticAsset && voicemailStaticAsset.length !== 0 ? {backgroundImage: `url(${URL.createObjectURL(voicemailStaticAsset[0].blob)})`} : null}
        type="button"
        name="voice"
        onClick={press >= 5 ? handleClick : null}
      ></div>
    </div>
  );
}
