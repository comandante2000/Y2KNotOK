import "./BootAccept.scss";
import {useEffect, useState} from "react";
import Cookies from 'js-cookie';
export default function BootAccept({instruction , setpress }) {

  const [checked , setCheck] = useState(false);

  const handleCheckboxChanged = (event) => {
   
    setCheck(event.target.checked);
  }
  function Next() { 
    if (checked){
      setpress(function (prevCount) {
        return (prevCount += 2);
      });
    }
  }

  // Cookie

  // if (checked == true){
  //   Cookies.set('Flow1.3', 'Flow1.3done', { expires: 7 })
  // }

 // Cookie
  return (
    <div id="pda-boot-screen-accept">
      <div className="pda-boot-container">
        <div className="d-flex justify-content-center align-items-center info-popup-container">
          <div className="image-popup align-self-center">
            <div className="centered d-flex flex-column align-items-center  justify-content-center">
              <p className="Popup-Title mt-5 mb-3 d-flex justify-content-center px-1"></p>
              <p className="popup-text text-center m-0 fw-bold my-1">
                Before you BEGIN:
              </p>
              <p className="instruction-text m-0 text-center mt-2 mb-3">
              {instruction}
              </p>
              <div className="the_policy_check d-flex justify-content-center">
                <div className="form-check">
                  <input type="checkbox" value={checked} onChange={handleCheckboxChanged} id="flexCheckDefault" className="form-check-input y2k-checkbox"/>
                  <label htmlFor="flexCheckDefault" className="form-check-label txt-label">
                    I understand and accept the <a href="#" className="txt-privacy-policy">Privacy Policy</a>
                  </label>
                </div>
              </div>
              {/*<div disable={checked ? "false" : "true"} onClick={Next} className="accept-button m-0 d-flex justify-content-center align-items-center mt-3 mb-3">*/}
              {/*  Accept*/}
              {/*</div>*/}
              <button disable={checked ? "false" : "true"} onClick={Next} className="accept-button m-0 d-flex justify-content-center align-items-center mt-3 mb-3">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
