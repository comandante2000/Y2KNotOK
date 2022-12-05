import "./MapPageOne.scss";
import { useState, useEffect } from "react";
export default function MapPageOne({ setZoom }) {
  const Zoom = () => {
    setZoom(false);
  };

  return (
    <div id="map-pageone-screen">
      <div className=" image d-flex justify-content-center position-relative">
        <div className="image-map "></div>
        <div
          className="zoomin position-absolute bottom-0 start-0"
          type="button"
          onClick={Zoom}
        ></div>
      </div>
    </div>
  );
}
