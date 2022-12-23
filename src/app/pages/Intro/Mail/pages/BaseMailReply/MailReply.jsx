import "./MailReply.scss";
import { useState,useEffect } from "react";

export default function MailReply({ name ,setOpenvideo,setOpen, setOpenMail,episodeone,SetVideo}) {
  const [opentext, setOpentext] = useState(false);
  const [personnames, setNames] = useState([{
    name: "hrtimothee@redwest.com",
  },
]);

const [yes ,setyes] =useState(false);
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

useEffect(() => {
  if(episodeone === "Flow1.13.1"){
    setyes(true);
 setNames([{   name: "Y2Knotok.AOL.com",}])
  }

},[episodeone]);

const HandleYes = () => {
setTimeout(function() {
SetVideo("Episode2");
      },);
};


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
               {personnames[0].name}
              </div>
              <div className="w-50 mail-date text-end">12/30</div>
            </div>
            <div>
              <div className="subject">Subject for Y2KNOTOK</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start px-4 reply-mail">
         {yes?"":"LISTEN"}
        </div>

       {yes? <div className="question d-flex flex-column justify-content-center align-items-center border border-dark ">
          <div className="questions mb-2">Would you like to continue?</div>
          <div  className="back_button d-flex justify-content-center align-items-center" type ="button" onClick={HandleYes}>Yes</div>
        </div>:null}
     
        <div className="d-flex justify-content-center txt-area-container mt-3">
          {opentext ? (
              <div className="d-flex justify-content-center align-items-end txt-area">
                <textarea className="txt-area-bg" type="text"></textarea>
              </div>
          ) : null}
        </div>
      <div className="box-container mt-4  border-top-4" type="button" onClick={yes?null:Openvideo}>
          <div className="d-flex justify-content-center align-items-center ">
            <div className="clip px-1"></div>
            <div className={`${yes?"noattachment":"attachment"} px-2`}>{ yes?"No Attachment":"Attachment"}</div>
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