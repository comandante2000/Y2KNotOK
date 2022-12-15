import "./Map.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import MapPageOne from "./pages/Map1/MapPageOne";
import MapPageTwo from "./pages/MapPageTwo/MapPageTwo";
import MapLocatingPage from "./pages/Locating/Locating";
import { useState, useEffect } from "react";
export default function MapPage({setAccesmail,accessmail}) {
  const [zoom, setZoom] = useState(true);

  console.log("the zoom", zoom);

  console.log("ttt", typeof setZoom);
  

  
  return (
    <div id="pda-map-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header name="Map" />

           {accessmail=="Flow1.12"?<MapLocatingPage/>:
            zoom ? (
            <MapPageOne setZoom={setZoom} setAccesmail={setAccesmail} accessmail={accessmail}/>
          ) : (
            <MapPageTwo setZoom={setZoom} setAccesmail={setAccesmail} accessmail={accessmail}/>
          )
           }

         
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
