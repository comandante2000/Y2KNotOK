import "./MailInfo.scss";
import { useState } from "react";
export default function MailInfo() {

  const [open, setOpen] = useState(false);

  const OpenReplay = () => {
    setOpen(true);
  };

  return (
    <div id="pda-mail-info">
      <div className=" d-flex justify-content-evenly mx-1 me-3  py-0 g-5 ">
        <div className="red-icon "></div>
        <div className="mail-icon"></div>
        <div>
          <div className="d-flex justify-content-center ">
            <div className="mail-name">admin@redwest.com</div>
            <div className="ms-4">12/30</div>
          </div>
          <div>
            <div className="subject">Subject Line</div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center px-4">
        Lorem ipsum dolor sit amet, mutat partem theophrastus ex qui, an falli
        detracto disputationi sed, appetere
        <br />
        Ut dolor voluptua sapientem vis, vivendo inimicus concludaturque pro et.
        Cum convenire constituam ut. Cum

      </div>
      {open?<div className="d-flex justify-content-center">
         <textarea type="text" rows="2">r</textarea>
      </div>:null  
    }
        
      
     

      <div className="d-flex justify-content-around mt-3">
        <div
          className="d-flex justify-content-center border border-dark px-3"
          type="button"
        >
          Back
        </div>
        <div
          className="d-flex justify-content-center border border-dark px-3"
          type="button"
          onClick={OpenReplay}
        >
          Replay
        </div>
        <div
          className="d-flex justify-content-center border border-dark px-3"
          type="button"

        >
          Delete
        </div>
      </div>
    </div>
  );
}
