import "./Time.scss";

export default function Time({open, openMail,time}) {


  
  return (
      <div  id="time-component">
        <div className=" screen-head d-flex bd-highlight justify-content-sm-center">
          <div className="bar"></div>
          <div className="battery"></div>
          <div className="time">
            <div className="d-flex justify-content-center clock">
                <p className={open || openMail ? "overlay-date-time" : "date-time"}>
                 {time}
                </p>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
  );
}
