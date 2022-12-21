import { useLiveQuery } from "dexie-react-hooks";
import "./Map.scss";
import { useState, useEffect } from "react";
import { db } from "../../../../../modules/db";

export default function MapButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
}) {
  const handleClick5 = () => {
    showScreen("MapScreen");
    setActive("map");
    if (episodeone == "Flow1.9") {
      setEpisodeOne("Flow1.9.1");
    }
    if (episodeone == "Flow1.11") {
      setEpisodeOne("Flow1.12");
    }
  };

  const mapButtonStaticAsset = useLiveQuery(
    () => db.assets.where('title').equalsIgnoreCase('pda-device-button-map').toArray(),
  );
  
  return (
    <div id="map-button">
      <div
        className={`button-5 ${color == "map" ? "red" : "black"} ${
          episodeone == "Flow1.9" || episodeone == "Flow1.11"
            ? "button-glow"
            : null
        }`}
        // style={mapButtonStaticAsset && mapButtonStaticAsset.length !== 0 ? {backgroundImage: `url(${URL.createObjectURL(mapButtonStaticAsset[0].blob)})`} : null}
        type="button"
        name="map"
        onClick={press >= 5 ? handleClick5 : null}
      ></div>
    </div>
  );
}
