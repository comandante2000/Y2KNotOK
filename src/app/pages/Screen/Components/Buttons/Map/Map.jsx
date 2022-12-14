import "./Map.scss";
import { useState, useEffect } from "react";
export default function MapButton({ showScreen, setActive, color, press }) {
  const handleClick5 = () => {
    showScreen("MapScreen");
    setActive("map");
  };

  return (
    <div id="map-button">
      <div
        className={`button-5 ${color == "map" ? "red" : "black"}`}
        type="button"
        name="map"
        onClick={press >= 5 ? handleClick5 : null}
      ></div>
    </div>
  );
}
