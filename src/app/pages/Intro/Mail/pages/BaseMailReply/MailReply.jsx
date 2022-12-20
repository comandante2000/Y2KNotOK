import "./MailReply.scss";
import { useState } from "react";

export default function MailReply({ name ,setOpenvideo,setOpen, setOpenMail}) {
  const [opentext, setOpentext] = useState(false);
  
  const OpenReplay = () => {
    setOpentext(true);
  };
  const OpenBack = () => {
    setOpen(false);
  };

  const Openvideo = () => {
    setOpenvideo(true);
    setOpenMail(true);
  };
  const OpenCancel = () => {
    setOpentext(false);
    
  };
  const handleSubmit = (e) => {
  }
  return (
    <div id="pda-mail-reply">
     

      <div className="mail-reply-container">
        <div
          className=" d-flex  py-0 g-5 position-relative base-mail-container "
          type="button"
        >
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
              <div className="subject">Subject for Y2KNOTOK</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start px-4 reply-mail">
          LISTEN
        </div>
        <div className="d-flex justify-content-center txt-area-container mt-3">
          {opentext ? (
              <div className="d-flex justify-content-center align-items-end txt-area">
                <textarea className="txt-area-bg" type="text"></textarea>
              </div>
          ) : null}
        </div>
        <div className="box-container mt-4  border-top-4" type="button" onClick={Openvideo}>
          <div className="d-flex justify-content-center align-items-center ">
            <div className="clip px-1"></div>
            <div className="attachment px-2"> Attachment</div>
          </div>
        </div>
        <div className="d-flex justify-content-between btn-container">
          <div
            className="back_button d-flex justify-content-center align-items-center"
            type="button"
            onClick={opentext ?handleSubmit  :OpenBack}
          >
           {opentext ? "Send" :"Back" }
          </div>
          <div
            className={`${opentext?"delete_button":"reply_button"} d-flex justify-content-center align-items-center`}
            type="button"
            onClick={OpenReplay}
          >
            Reply
          </div>
          <div
            className={`${opentext?"reply_button":"delete_button"} d-flex justify-content-center align-items-center`}
            type="button"
            onClick={OpenCancel}
          >
           {opentext ? "Cancel" : "Delete"}
          </div>
        </div>
      </div>
    </div>
  );
}