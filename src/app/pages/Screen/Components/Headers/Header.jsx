import "./Header.scss";
import { useState } from "react";
export default function Header(props) {
  return (
    <div id="mail-screen-one">
      <div className=" screen-dash d-flex justify-content-between mb-3">
        <div className="email px-3">
          <div className="text-email">{props.name}</div>
        </div>
        <div className="logo-container mx-2 ">
          <div className="logo"></div>
        </div>
      </div>
    </div>
  );
}
