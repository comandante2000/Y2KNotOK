import "./Buttons.scss";
import { useState, useEffect } from "react";
export default function Buttons() {
  const [active, setActive] = useState(false);
  const [activeb, setActiveb] = useState(false);
  const [activeu, setActiveu] = useState(false);
  const handleClick = () => {
    setActive((prev) => !prev);
  };
  const handleClick1 = () => {  //tun click 1
    setActiveb((prev) => !prev);
  };
  const handleClick2 = () => {    //tun click 2
    setActiveu((prev) => !prev);
  };

  return (
    <div id="pda-buttons">
      <div class=" row-1">
        <div className="buttns d-inline-flex">
          <li className="button-list d-flex justify-content-evenly">
            <div
              className="button-1"
              type="button"
              name="radio"
              onClick={handleClick1}
              style={{
                backgroundColor: activeb ? "red" : "black",
                borderRadius: "25px",
                border: activeb ? "2px solid #e32828f7" : "none",
              }}
            ></div>
            <div
              className="button-2"
              type="button"
              name="email"
              onClick={handleClick2}
              style={{
                backgroundColor: activeu ? "red" : "black",
                border: activeu ? "2px solid #e32828f7" : "none",
                borderRadius: "25px",
              }}
            ></div>
            <div
              className="button-3"
              type="button"
              name="phone"
              onClick={handleClick}
              style={{
                backgroundColor: active ? "red" : "black",
                border: active ? "2px solid #e32828f7" : "none",
                borderRadius: "25px",
              }}
            ></div>
            <div
              className="button-4"
              type="button"
              name="message"
              onClick={handleClick}
              style={{
                backgroundColor: active ? "red" : "black",
                border: active ? "2px solid #e32828f7" : "none",
                borderRadius: "25px",
              }}
            ></div>
            <div
              className="button-5"
              type="button"
              name="map"
              onClick={handleClick}
              style={{
                backgroundColor: active ? "red" : "black",
                border: active ? "2px solid #e32828f7" : "none",
                borderRadius: "25px",
              }}
            ></div>
          </li>
        </div>
      </div>
    </div>
  );
}
