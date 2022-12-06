import "./Time.scss";

export default function Time() {
  return (
      <div  id="time-component">
        <div className=" screen-head d-flex bd-highlight justify-content-sm-center">
          <div className="bar"></div>
          <div className="battery"></div>
          <div className="time">
            <div className="d-flex justify-content-center clock">
                <p className="date-time">
                    Monday 10:AM
                </p>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
  );
}
