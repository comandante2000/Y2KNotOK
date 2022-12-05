import "./Mail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import MailBase from "./pages/BaseMail/BaseMail";
import MailBaseUnred from "./pages/BaseMailUnred/BaseMailUnred";
import MailInfo from "./pages/BaseMailInfo/MailInfo";
import { useState } from "react";
export default function MailPage() {
  const [open, setOpen] = useState(false);

  const OpenMessage = () => {
    setOpen(true);
  };
  return (
    <div id="pda-mail-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>

        <div className="inner-row-center">
          <div>
            <Time />
            <Header name="Mail" />
            <div>
              
              {open ? (
                <MailInfo />
              ) : (
                <div type="button" onClick={OpenMessage}>
                  <MailBase name="admin@redwest.com" />
                  <MailBase name="admin@redwest.com" />
                  <MailBaseUnred name="admin@redwest.com" />
                  <MailBaseUnred name="admin@redwest.com" />
                  <MailBaseUnred name="admin@redwest.com" />
                </div>
              )}
             
            </div>
          </div>
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
