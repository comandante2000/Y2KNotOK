import "./Map.scss";
import { useState, useEffect } from "react";
export default function MapButton({ showScreen}) {
  const [active5, setActive5] = useState(false);
  const handleClick5 = () => {
    setActive5((prev) => !prev);
    showScreen("MapScreen");
  };

  return (
    <div id="map-button">
      <div
        className="button-5"
        type="button"
        name="map"
        onClick={handleClick5}
        style={{
          backgroundColor: active5 ? "red" : "black",
          borderRadius: "25px",
          border: active5 ? "2px solid #e32828f7" : "none",
        }}
      ></div>
    </div>
  );
}