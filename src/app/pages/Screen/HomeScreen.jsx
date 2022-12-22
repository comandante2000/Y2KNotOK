import "./screen.scss";
import Time from "./Components/Time/Time";
import Boot from "./Boot/Boot";
import BootAccept from "./BootAccept/BootAccept";
import Home from "./Home";
import { useState } from "react";
import Cookies from 'js-cookie';
export default function HomeScreen({ press, setpress,dtime }) {
  
    //Cookies for Flow 1.3
// const Flow1 = Cookies.get('Flow1.3');
// if (Flow1 == "Flow1.3done"){
//   setpress(6)
// }
//Cookies for Flow 1.3
  return (
    <div id="pda-home-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          {<Home dtime={dtime}/>}
        </div>
        <div className="inner-row-right"></div>
        <div className="logo"></div>
        <div className=""></div>
      </div>
    </div>
  );
}
