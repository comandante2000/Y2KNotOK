import "./Phone.scss";
import { useState, useEffect } from "react";
export default function PhoneButton({ showScreen}) {
  const [active3, setActive3] = useState(false);
  const handleClick3 = () => {
    setActive3((prev) => !prev);
    showScreen("PhoneScreen");
  };

  return (
    <div id="phone-button">
      <div
        className="button-3"
        type="button"
        name="phone"
        onClick={handleClick3}
        style={{
          backgroundColor: active3 ? "red" : "black",
          borderRadius: "25px",
          border: active3 ? "2px solid #e32828f7" : "none",
        }}
      ></div>
    </div>
  );
}
