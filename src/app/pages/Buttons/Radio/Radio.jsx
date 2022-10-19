import "./Radio.scss";
import { useState, useEffect } from "react";
export default function RadioButton() {
  const [active1, setActive1] = useState(false);
  const handleClick1 = () => {
    setActive1((prev) => !prev);
  };

  return (
    <div id="radio-button">
      <div
        className="button-1"
        type="button"
        name="radio"
        onClick={handleClick1}
        style={{
          backgroundColor: active1 ? "red" : "black",
          borderRadius: "25px",
          border: active1 ? "2px solid #e32828f7" : "none",
        }}
      ></div>
    </div>
  );
}
