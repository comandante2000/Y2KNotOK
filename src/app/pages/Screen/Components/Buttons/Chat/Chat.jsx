import "./Chat.scss";
import { useState, useEffect } from "react";
export default function ChatButton({showScreen}) {
  const [active4, setActive4] = useState(false);
  const handleClick4 = () => {
    setActive4((prev) => !prev);
    showScreen("MessageScreen");
  };

  return (
    <div id="chat-button">
      <div
        className="button-4"
        type="button"
        name="chat"
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