import "./MailReply.scss";
import { useState } from "react";
export default function MailReply({name}) {

  const [open, setOpen] = useState(false);

  const OpenReplay = () => {
    setOpen(true);
  };

  return (
    <div id="pda-mail-reply">
      <div className=" d-flex  py-0 g-5 position-relative base-mail-container " type="button">
                <div className="icon-container d-flex align-items-center">
                    <div className="red-icon"></div>
                    <div className="mail-icon"></div>
                </div>
                <div className="info-container me-3 m-auto">
                    <div className="d-flex w-100">
                        <div className="person-name w-50">
                            {name}
                        </div>
                        <div className="w-50 mail-date text-end">
                            12/30
                        </div>
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
         <textarea  className="txt-area-bg"
          type="text"
          rows=""
          cols="60"></textarea>
         
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
