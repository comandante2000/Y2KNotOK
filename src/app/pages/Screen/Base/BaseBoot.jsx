import "./BaseBoot.scss";
import Boot from "../Boot/Boot";
import BootAccept from "../BootAccept/BootAccept";
import { useState } from "react";
import Cookies from "js-cookie";
import IntroVideo from "../IntroVideo/IntroVideo";

export default function BaseBoot({ press, setpress, dtime, setNewuser }) {
  let bootone =
    "1. Y2K NOT OK is an hour-long interactive story told in 10 episodes.";
  let boottwo = "2. Y2K NOT OK is available on desktop or mobile devices.";
  let bootthree =
    "3. Much of the Y2K NOT OK story is AUDIO.  We recommend you use HEADPHONES.";
  let bootfour =
    "4.  If you’d like to EXIT and RETURN to Y2K NOT OK, please use the same browser and don’t clear your cache.";
  let bootfive =
    "5. This website uses cookies to personalize your experience and for measurement and analytics purposes. By using our website and services, you agree to our use of cookies as described in our Cookie and Privacy Policies.";

  //Cookies for Flow 1.3
  // const Flow1 = Cookies.get('Flow1.3');
  // if (Flow1 == "Flow1.3done"){
  //   setpress(6)
  // }
  //Cookies for Flow 1.3
  console.log(press, "fhghfh");
  return (
    <div id="pda-boot-intro-screen">
      <div className="boot-background">
      {press === 0 && <Boot instruction={bootone} setpress={setpress} />}
      {press === 1 && <Boot instruction={boottwo} setpress={setpress} />}
      {press === 2 && <Boot instruction={bootthree} setpress={setpress} />}
      {press === 3 && <Boot instruction={bootfour} setpress={setpress} />}
      {press === 4 && <Boot instruction={bootfive} setpress={setpress} />}
      {press === 5 && <BootAccept instruction={bootfive} setpress={setpress} />}
        </div>
      {press >= 6 &&<IntroVideo  setNewuser ={ setNewuser }/>}
    </div>
  );
}
