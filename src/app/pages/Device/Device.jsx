import "./Device.scss";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import Header from "../Header/Header";
export default function Device() {
  return (
    <div id="pda-device">
      <div className="container v2 d-flex justify-content-center gx-0 gy-0">
        <div className="box">
          <Header/>
          <Screen/>
          <Buttons/>
        </div>
      </div>
    </div>
  );
}
