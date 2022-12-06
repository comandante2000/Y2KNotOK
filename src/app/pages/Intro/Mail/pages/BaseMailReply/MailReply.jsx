import "./MailReply.scss";
import { useState } from "react";
export default function MailReply({ name }) {
  const [open, setOpen] = useState(false);

  const OpenReplay = () => {
    setOpen(true);
  };
  const OpenBack = () => {
    setOpen(false);
  };

  return (
    <div id="pda-mail-reply">
      <div className="mail-reply-container">
        <div className=" d-flex  py-0 g-5 position-relative base-mail-container " type="button">
          <div className="icon-container d-flex align-items-center">
            <div className="red-icon"></div>
            <div className="mail-icon"></div>
          </div>
          <div className="info-container me-3 m-auto">
            <div className="d-flex w-100">
              <div className="person-name w-50 text-decoration-underline">
                {name}
              </div>
              <div className="w-50 mail-date text-end">12/30</div>
            </div>
            <div>
              <div className="subject">Subject Line</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center px-4 reply-mail">
          Lorem ipsum dolor sit amet, mutat partem theophrastus ex qui,
          an falli detracto disputationi sed, appetere Ut dolor voluptua sapientem
          vis,
          <br />
          <br />
          Ut dolor voluptua sapientem vis, vivendo inimicus concludaturque pro et.
          Cum convenire constituam ut. CumUt dolor voluptua sapientem vis,
        </div>
        {open ? (
            <div className="d-flex justify-content-center mt-3">
          <textarea className="txt-area-bg" type="text"></textarea>
            </div>
        ) : null}
        <div className="d-flex justify-content-around mt-3">
          <div className="back_button d-flex justify-content-center align-items-center" type="button" onClick={OpenBack}>Back</div>
          <div className="reply_button d-flex justify-content-center align-items-center" type="button" onClick={OpenReplay}>Reply</div>
          <div className="delete_button d-flex justify-content-center align-items-center" type="button">Delete</div>
        </div>
      </div>
    </div>
  );
}
