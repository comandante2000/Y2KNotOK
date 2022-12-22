import "./Boot.scss";
import { useState } from "react";
export default function Boot({ instruction, setpress }) {


  function Next() {
    setpress(function (prevCount) {
      return (prevCount += 1);
    });
  }
 
  return (
   <div id="pda-boot-screen">
      <div className="pda-boot-container">
        <div className="d-flex justify-content-center align-items-center info-popup-container">
          <div className="image-popup align-self-center">
            <div className="centered d-flex flex-column align-items-center  justify-content-center">
              <p className="Popup-Title d-flex justify-content-center px-1"></p>
              <p className="popup-text text-center fw-bold">
                Before you BEGIN:
              </p>
              <p className="instruction-text text-center">
                {instruction}
              </p>
              <div className="next-button d-flex justify-content-center align-items-center mt-2 mb-3" type="button" onClick={Next}>
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
