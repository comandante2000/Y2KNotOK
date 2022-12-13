import "./Mail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import MailBase from "./pages/BaseMail/BaseMail";
import MailBaseUnred from "./pages/BaseMailUnred/BaseMailUnred";
import MailReply from "./pages/BaseMailReply/MailReply";
import { useState } from "react";
import PopUps from "./pages/Popups/Popups";
export default function MailPage({accessmail,setAccesmail}) {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(true);

  const [openvideo, setOpenvideo] = useState(false);
 


  const OpenMessage = () => {
    setOpen(true);
    setHide(false);
  };
  console.log(accessmail,"the value of accesmail mail page");
  return (
    <div id="pda-mail-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>

        <div className={`inner-row-center ${openvideo?"voiceplay":"unvoiceplay"}`}>

          <div>
           
            <Time />
            <Header name="Mail" />
            
            <div className="mail-box-container">
              {open ? (
                <MailReply name="admin@redwest.com" setOpenvideo={setOpenvideo}/>
              ) : (
                <div type="button" onClick={accessmail=="allow"||accessmail=="allowed" ||accessmail==="mailpop"?OpenMessage:null} >
                  <div className="mail-container">
                    <MailBase name="hrtimothee@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                    <MailBaseUnred name="admin@redwest.com" />
                  </div>
                </div>
              )}
              {hide ?
                <div className="btn-delete-container d-flex justify-content-end">
                  <div className="btn-delete d-flex justify-content-center align-items-center">
                    Delete
                  </div>
                </div> : null
              }
            </div>
            {openvideo?<PopUps video="https://images.stinkyfruit.com/Finn.mp4"  setOpenvideo={ setOpenvideo} setAccesmail={setAccesmail}/>:null}
          </div>
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
