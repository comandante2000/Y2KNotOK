import "./Map.scss";
import { useState, useEffect } from "react";
export default function MapButton({ showScreen, setActive, color, press,accessmail,setAccesmail }) {

  const handleClick5 = () => {
    showScreen("MapScreen");
    setActive("map");
    if(accessmail=="Flow1.9"){
      setAccesmail("Flow1.9.1")
    }
    if(accessmail=="Flow1.11"){
      setAccesmail("Flow1.12")
    }

  };

  return (
    <div id="map-button">
      <div
        className={`button-5 ${color == "map" ? "red" : "black"} ${accessmail=="Flow1.9"||accessmail=="Flow1.11"?"button-glow":null}`}
        type="button"
        name="map"
        onClick={press >= 5 ? handleClick5 : null}
      ></div>
    </div>
  );
}
