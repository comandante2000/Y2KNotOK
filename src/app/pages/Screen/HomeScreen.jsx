import "./screen.scss";
import Time from "./Components/Time/Time";
import Boot from "./Boot/Boot";
import BootAccept from "./BootAccept/BootAccept";
import Home from "./Home";
import { useState } from "react";
export default function HomeScreen() {


let bootone ="1. Y2K NOT OK is an hour-long interactive story told in 10 episodes.";
  let boottwo = "2. Y2K NOT OK is available on desktop or mobile devices.";
  let bootthree = "3. Much of the Y2K NOT OK story is AUDIO.  We recommend you use HEADPHONES.";
  let bootfour = "4.  If you’d like to EXIT and RETURN to Y2K NOT OK, please use the same browser and don’t clear your cache.";
  let bootfive = "5. This website uses cookies to personalize your experience and for measurement and analytics purposes. By using our website and services, you agree to our use of cookies as described in our Cookie and Privacy Policies.";
 
  const [press, setpress] = useState(0);


console.log("the instruction press:", press);

  return (
    <div id="pda-home-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
       
            { press===0 && <Boot instruction={bootone}setpress={setpress} />}
            { press===1 && <Boot instruction={boottwo}setpress={setpress} />}
            { press===2 && <Boot instruction={bootthree}setpress={setpress} />}
            { press===3 && <Boot instruction={bootfour}setpress={setpress} />}
            { press===4 && <BootAccept instruction={bootfive}setpress={setpress} />}
            { press===5 && <BootAccept instruction={bootfive}setpress={setpress} />} 
            { press===6 &&   <Home/>} 
        
        </div>
        <div className="inner-row-right"></div>
        <div className="logo"></div>
        <div className=""></div>
      </div>
    </div>
  );
}
