import "./BaseMailUnred.scss";
export default function MailBaseUnred({name}) {
 
   
  // admin@redwest.com


  return (
    <div id="pda-mail-base-unred">
      <div className=" d-flex border border-dark py-0 g-5 position-relative base-mail-unread-container ">
                <div className="icon-container d-flex align-items-center">
                    <div className="unred-icon"></div>
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
    </div>
  );
}
