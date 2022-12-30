
import "./Map.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import MapPageOne from "./pages/Map1/MapPageOne";
import MapPageTwo from "./pages/MapPageTwo/MapPageTwo";
import MapLocatingPage from "./pages/Locating/Locating";
import { useState, useEffect } from "react";
export default function MapPage({ setEpisodeOne, episodeone, dtime }) {
  const [zoom, setZoom] = useState(true);
  const [time, settimer] = useState(0);

  let permission = [
    "notallowedsound",
    "notallowed",
    "allow",
    "allowed",
    "Flow1.3",
    "mailpop",
    "Flow1.7",
    "Flow1.7.1",
    "Flow1.7.1.1",
    "Flow1.8",
    "Flow1.8.1",
  ];
  let Allpermission = ["flow Flow1.9.1","Flow1.10", "Flow1.10.1", "Flow1.11", "Flow1.13"];

  useEffect(
    function () {
      setTimeout(function () {
        settimer(4);
      }, 2000);
    },
    [time]
  );

  useEffect(() => {
    if (Allpermission.includes(episodeone)) {
      settimer(4);
      console.log("ok")
    }
  }, [episodeone]);

  return (
    <div id="pda-map-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time time={dtime} />
          <Header name="Map" />

          {permission.includes(episodeone) ? (
            <MapLocatingPage />
          ) : time == 4 ? (
            zoom ? (
              <MapPageOne
                setZoom={setZoom}
                setEpisodeOne={setEpisodeOne}
                episodeone={episodeone}
              />
            ) : (
              <MapPageTwo
                setZoom={setZoom}
                setEpisodeOne={setEpisodeOne}
                episodeone={episodeone}
              />
            )
          ) : (
            <MapLocatingPage />
          )}
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}



