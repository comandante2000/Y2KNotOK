import "./Boot.scss";
import { useState } from "react";
export default function Boot({instruction}) {
  const[next,setNext]= useState("true");
  const Next =() =>{
  
    setNext("false");
    console.log("Next has been Pressed",next);
  }
  return (
    <div id="pda-boot-screen">
      <div className="pda-boot-container">
        <div className="d-flex justify-content-center align-items-center info-popup-container">
          <div className="image-popup align-self-center">
            <div className="centered d-flex flex-column align-items-center  justify-content-center">
              <p className="Popup-Title mt-5 mb-3 d-flex justify-content-center px-1"></p>
              <p className="popup-text text-center m-0 fw-bold my-1">
                Before you BEGIN
              </p>
              <p className="instruction-text m-0 text-center mt-2 mb-3">
              {instruction}
              </p>
              <div
                className="next-button m-0 text-center mt-2 mb-3"
                type="button"
                onClick={Next}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
