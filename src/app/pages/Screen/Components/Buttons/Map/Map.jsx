import "./Map.scss";
import { useState, useEffect } from "react";
export default function MapButton({ showScreen, setActive, color }) {


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
        onClick={handleClick5}
      ></div>
    </div>
  );
}
