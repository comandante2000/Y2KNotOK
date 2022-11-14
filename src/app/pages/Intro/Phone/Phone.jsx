
import "./Phone.scss"
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
export default function PhonePage() {
    
    return (
      <div id="pda-phone-screen">
        <div className=" row-2 d-flex justify-content-center">
          <div className="inner-row-left"></div>
          <div className="inner-row-center">
          <Time />
            <Header name="Phone"/>
          </div>
          <div className="inner-row-right"></div>
        </div>
      </div>
    );
  }