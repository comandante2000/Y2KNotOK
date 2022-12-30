import "./MapPageOne.scss";
import { useState, useEffect } from "react";
export default function MapPageOne({ setZoom, setEpisodeOne, episodeone }) {
  const Zoom = () => {
    setZoom(false);
    if (episodeone === "Flow1.9.1" ||episodeone === "Flow1.9.2") {
      setTimeout(function () {
        setEpisodeOne("Flow1.10");
      }, 3000);
    }
  };
  return (
    <div id="map-pageone-screen">
      <div className=" image d-flex justify-content-center flex-column">
        <div className="image-map "></div>
        <div className="zoomin" type="button" onClick={Zoom}></div>
        <div className="zoomout"></div>
      </div>
    </div>
  );
}
