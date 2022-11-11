import "./Mail.scss";

import { useState, useEffect } from "react";

export default function MailButton({showScreen}) {
  const [active2, setActive2] = useState(false);

  const handleClick2 = () => {
    setActive2((prev) => !prev);
    showScreen("MailScreen");
  };

  return (
    <div id="mail-button">
      <div
        className="button-2"
        type="button"
        name="mail"
        onClick={handleClick2}
        style={{
          backgroundColor: active2 ? "red" : "black",
          borderRadius: "25px",
          border: active2 ? "2px solid #e32828f7" : "none",
        }}
      ></div>
    </div>
  );
}
