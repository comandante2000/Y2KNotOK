import "./VoiceMail.scss";
import { useState, useEffect } from "react";
export default function VoiceMailButton({ showScreen }) {
  const [active1, setActive1] = useState(false);
  const handleClick1 = () => {
    setActive1((prev) => !prev);
    showScreen("VoicemailScreen");
  };

  return (
    <div id="voice-button">
      <div
        className="button-1"
        type="button"
        name="voice"
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
