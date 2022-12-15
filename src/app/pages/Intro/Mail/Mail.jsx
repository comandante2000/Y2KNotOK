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
                <MailReply name="hrtimothee@redwest.com" setOpenvideo={setOpenvideo} setOpen={setOpen}/>
              ) : (
                <div type="button" onClick={accessmail =="notallowed"?null:OpenMessage} >
                  <div className="mail-container">
                    <MailBase name="hrtimothee@redwest.com" accessmail={accessmail} />
                    <MailBaseUnred name=" shirleyb5678@AOL.com" subject={"call me"}/>
                    <MailBaseUnred name="krista.trip@redwestco.com" subject={"12/17/99"}/>
                    <MailBaseUnred name="shirleyb5678@AOL.com" subject={"VLA"}/>
                    <MailBaseUnred name="mateo.torres@redwestco.com" subject={"Finn"}/>
                    <MailBaseUnred name="shirleyb5678@AOL.com" subject={"hello?"}/>
                    <MailBaseUnred name="shirleyb5678@AOL.com" subject={"I need gift ideas"}/>
                    <MailBaseUnred name="krista.trip@redwestco.com"subject={"End of Days tonight?"} />
                    <MailBaseUnred name="finn.walsh@redwestco.com" subject={"end of days tonight"}/>
                    <MailBaseUnred name="finn.walsh@redwestco.com" subject={"<no subject>"}/>
                    <MailBaseUnred name="krista.trip@redwestco.com"subject={"Y2K jokes"} />
                    <MailBaseUnred name="finn.walsh@redwestco.com" subject={"rw control center closed 12/24 to 1/3"}/>
                    <MailBaseUnred name="krista.trip@redwestco.com" subject={"bars in Portland"}/>
                    <MailBaseUnred name="shirleyb5678@AOL.com" subject={"Brian"}/>
                    <MailBaseUnred name="shirleyb5678@AOL.com" subject={"Very Large Array trip"}/>
                    <MailBaseUnred name="krista.trip@redwestco.com.com" subject={"LiveJournal"}/>
                    <MailBaseUnred name="mateo.torres@redwestco.com"subject={"Vacation dates"} />
                    <MailBaseUnred name="shirleyb5678@AOL.com" subject={"Christmas dinner"}/>
                    <MailBaseUnred name="finn.walsh@redwestco.com" subject={"malin fix"}/>
                    <MailBaseUnred name="mateo.torres@redwestco.com" subject={"1999 party idea"}/>
                    <MailBaseUnred name="krista.trip@redwestco.com" subject={"<no subject>"}/>
                    <MailBaseUnred name="finn.walsh@redwestco.com" subject={"nye?"}/>
                    <MailBaseUnred name="krista.trip@redwestco.com" subject={"<no subject>"}/>
                    <MailBaseUnred name="hr100@redwest.com"subject={"Happy Holidays"} />
                    
              
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
            {openvideo?<PopUps video="https://images.stinkyfruit.com/Finn.mp4"  setOpenvideo={ setOpenvideo} setAccesmail={setAccesmail} accessmail={accessmail}/>:null}
          </div>
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
