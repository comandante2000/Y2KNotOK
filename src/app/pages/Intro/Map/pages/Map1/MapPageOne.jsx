import "./MapPageOne.scss";
import { useState, useEffect } from "react";
export default function MapPageOne({ setZoom }) {
  const Zoom = () => {
    setZoom(true);
  };

  return (
    <div id="map-pageone-screen">
      <div className=" image d-flex justify-content-center">
        <div className="image-map position-relative">
          <div
            className="zoomin position-absolute bottom-0 start-0"
            type="button"
            onClick={Zoom}
          ></div>
        </div>
      </div>
    </div>
  );
}
