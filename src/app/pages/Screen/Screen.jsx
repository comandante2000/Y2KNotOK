import "./screen.scss";
import Home from "./Home/Home";
export default function Screen() {
  return (
    <div id="pda-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <marquee behavior="" direction="left">
            hellow v2 world
          </marquee>
          <div>new</div>
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
