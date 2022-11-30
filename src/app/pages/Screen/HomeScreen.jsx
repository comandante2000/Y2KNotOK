import "./screen.scss";
import Time from "./Components/Time/Time";
import Boot from "./Boot/Boot";
import { useState } from "react";
export default function HomeScreen({ setNext }) {
  const [nextinstruction, setNextInstruction] = useState("");

  console.log("1", nextinstruction);
  console.log("2", setNext);
  console.log("3", nextinstruction);
  return (
    <div id="pda-home-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          {/* <Boot
            instruction="2. Y2K NOT OK is available on desktop or mobile devices."
            setNext={setNext}
          /> */}

          <Time/>
          <div className="the-image-logo"></div>
        </div>
        <div className="inner-row-right"></div>
        <div className="logo"></div>
        <div className=""></div>
      </div>
    </div>
  );
}
