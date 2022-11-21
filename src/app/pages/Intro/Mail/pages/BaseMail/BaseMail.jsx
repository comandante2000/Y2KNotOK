import "./BaseMail.scss";
export default function MailBase({name}) {
 
   
  // admin@redwest.com


  return (
    <div id="pda-mail-base">
      <div
        className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5"
        type="button"
      >
        <div className="red-icon"></div>
        <div className="mail-icon"></div>
        <div>
          <div className="d-flex justify-content-center ">
            <div className="mail-name">{name}</div>
            <div className="ms-4">12/30</div>
          </div>
          <div>
            <div className="subject">Subject Line</div>
          </div>
        </div>
      </div>
    </div>
  );
}
