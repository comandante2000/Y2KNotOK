import "./BaseMail.scss";
export default function MailBase({name}) {
 
   
  


  return (
    <div id="pda-mail-base">
   
        <div className=" d-flex py-0 g-5 position-relative base-mail-container " type="button">
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
                        <div className="subject">Listen</div>
                    </div>
                </div>
            </div>
    </div>
  );
}
