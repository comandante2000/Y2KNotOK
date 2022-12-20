import "./Map.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import MapPageOne from "./pages/Map1/MapPageOne";
import MapPageTwo from "./pages/MapPageTwo/MapPageTwo";
import MapLocatingPage from "./pages/Locating/Locating";
import { useState, useEffect } from "react";
export default function MapPage({ setEpisodeOne, episodeone }) {
  const [zoom, setZoom] = useState(true);
  const [time, settimer] = useState(0)
  console.log("the zoom", zoom);

  console.log("ttteopis", episodeone);

  useEffect(function () {
    console.log(time);
    if(time !==4000){
      settimer(time+1)
    }
  },[time])

  return (
    <div id="pda-map-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header name="Map" />

          {episodeone == "Flow1.9.1"||episodeone == "Flow1.10" ? time == 4000 ? (
            
            zoom?<MapPageOne
              setZoom={setZoom}
              setEpisodeOne={setEpisodeOne}
              episodeone={episodeone}
            />:<MapPageTwo
            setZoom={setZoom}
            setEpisodeOne={setEpisodeOne}
            episodeone={episodeone}
          />
          ): <MapLocatingPage />:<MapLocatingPage />
            
          }
         
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
