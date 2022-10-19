import "./Message.scss";
import { useState, useEffect } from "react";
export default function MessageButton() {
  const [active4, setActive4] = useState(false);
  const handleClick4 = () => {
    setActive4((prev) => !prev);
  };

  return (
    <div id="message-button">
      <div
        className="button-4"
        type="button"
        name="message"
        onClick={handleClick4}
        style={{
          backgroundColor: active4 ? "red" : "black",
          borderRadius: "25px",
          border: active4 ? "2px solid #e32828f7" : "none",
        }}
      ></div>
    </div>
  );
}