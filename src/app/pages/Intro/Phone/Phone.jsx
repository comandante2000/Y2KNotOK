import "./Phone.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
export default function PhonePage() {
  return (
    <div id="pda-phone-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header name="Phone" />
          <div className="phone-container d-flex justify-content-center align-items-center flex-column">
            <div className="redwest-logo-container">
              <div className="redwest-logo"></div>
            </div>
            <div className="redwest-keypad-container">
              <div className="keypad-row-one d-flex justify-content-between">
                <div className="redwest-btn-one d-flex align-items-center">
                  <div className="numbers">1</div>
                </div>
                <div className="redwest-btn-two d-flex justify-content-between align-items-center">
                  <div className="numbers">2</div>
                  <div className="letters">ABC</div>
                </div>
                <div className="redwest-btn-three d-flex justify-content-between align-items-center">
                  <div className="numbers">3</div>
                  <div className="letters">DEF</div>
                </div>
              </div>
              <div className="keypad-row-two d-flex justify-content-between">
                <div className="redwest-btn-one d-flex justify-content-between align-items-center">
                  <div className="numbers">4</div>
                  <div className="letters">GHI</div>
                </div>
                <div className="redwest-btn-two d-flex justify-content-between align-items-center">
                  <div className="numbers">5</div>
                  <div className="letters">JKL</div>
                </div>
                <div className="redwest-btn-three d-flex justify-content-between align-items-center">
                  <div className="numbers">6</div>
                  <div className="letters">MNO</div>
                </div>
              </div>
              <div className="keypad-row-three d-flex justify-content-between">
                <div className="redwest-btn-one d-flex justify-content-between align-items-center">
                  <div className="numbers">7</div>
                  <div className="letters">PQRS</div>
                </div>
                <div className="redwest-btn-two d-flex justify-content-between align-items-center">
                  <div className="numbers">8</div>
                  <div className="letters">TUV</div>
                </div>
                <div className="redwest-btn-three d-flex justify-content-between align-items-center">
                  <div className="numbers">9</div>
                  <div className="letters">WXYZ</div>
                </div>
              </div>
              <div className="keypad-row-four d-flex justify-content-between">
                <div className="redwest-btn-one d-flex justify-content-between align-items-center">
                  <div className="numbers">*</div>
                  <div className="letters"></div>
                </div>
                <div className="redwest-btn-two d-flex justify-content-between align-items-center">
                  <div className="numbers">0</div>
                  <div className="letters"></div>
                </div>
                <div className="redwest-btn-three d-flex justify-content-between align-items-center">
                  <div className="numbers">#</div>
                  <div className="letters"></div>
                </div>
              </div>
            </div>
            <div className="btn-call-container d-flex justify-content-start">
              <div className="btn-call d-flex justify-content-center align-items-center">
                Call
              </div>
            </div>
          </div>
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
