import "./Header.scss";
import { useState } from "react";
export default function Header({name,open}) {
  return (
      <div id="mail-screen-one">
        <div className=" screen-dash d-flex justify-content-between align-items-center">
          <div className="email px-3">
            <p className={open? "overlay-text-email" : "text-email"}>{name}</p>
          </div>
          <div className="logo-container">
            <div className="logo"></div>
          </div>
        </div>
      </div>
  );
}
