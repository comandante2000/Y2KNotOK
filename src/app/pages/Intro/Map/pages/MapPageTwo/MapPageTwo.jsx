import "./MapPageTwo.scss";
import { useState } from "react";
export default function MapPageTwo({setZoom}) {
console.log("fttt",typeof setZoom);

  const Zoom = () => {
setZoom(true);
  
  };
  return (
    <div id="map-pagetwo-screen">
      <div className=" image d-flex justify-content-center">
        <div className="Mappagetwo position-relative">
          <div className="d-flex justify-content-center">
            <div className="image-popup">
              <div class="centered"></div>
            </div>
          </div>

          <div
            className="zoomout position-absolute bottom-0 start-0"
            type="button"
            onClick={Zoom}
          ></div>
        </div>
      </div>
    </div>
  );
}
