import "./MapPageTwo.scss";
import { useState } from "react";
export default function MapPageTwo({setZoom}) {
console.log("fttt",typeof setZoom);

  const Zoom = () => {
setZoom(true);
  
  };
  return (
    <div id="map-pagetwo-screen">
      <div className=" image d-flex justify-content-center flex-column">
        <div className="Mappagetwo">
          {/* Popup Modal Start */}
          <div className="d-flex justify-content-center align-items-center info-popup-container">
            {/*<div className="image-popup align-self-center">*/}
            {/*  <div className="centered d-flex flex-column align-items-center center justify-content-center">*/}
            {/*    <p className="Popup-Title m-0 mt-5 mb-2 text-center">WARNING</p>*/}
            {/*    <p className="popup-text text-center m-0">POWER OUTAGE at the Red West CC. REMAINING OXYGEN LEVELS CRITICAL</p>*/}
            {/*    <p className="ending-text m-0 text-center mt-2 mb-3">HAVE A NICE DAY</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          {/* Popup Modal End */}
          <div className="zoomout" type="button" onClick={Zoom}></div>
        </div>
      </div>
    </div>
  );
}
