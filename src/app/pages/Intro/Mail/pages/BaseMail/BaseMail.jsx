import "./BaseMail.scss";
export default function MailBase({ name, episodeone ,subjects,listmail,date}) {
  return (
    <div id="pda-mail-base">
      <div
        className=" d-flex py-0 g-5 position-relative base-mail-container "
        
      >
        <div className="icon-container d-flex align-items-center">
          <div
            className={listmail.episodeone ===episodeone? "blink-red-icon" : "unred-icon"}
          ></div>
          <div className="mail-icon"></div>
        </div>
        <div className="info-container me-3 m-auto">
          <div className="d-flex w-100">
            <div className="person-name w-50">{name}</div>
            <div className="w-50 mail-date text-end">{date}</div>
          </div>
          <div>
            <div className="subject">{subjects}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
