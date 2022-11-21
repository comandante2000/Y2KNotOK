
import "./Map.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import MapPageOne from "./pages/Map1/MapPageOne";
import MapLocatingPage from "./pages/Locating/Locating";
import { useState,useEffect } from "react";
export default function MapPage() {


    return (
      <div id="pda-map-screen">
        <div className=" row-2 d-flex justify-content-center">
          <div className="inner-row-left"></div>
          <div className="inner-row-center">
          <Time />
            <Header name="Map"/>
            <MapLocatingPage/>
            {/* <MapPageOne/> */}

          </div>
          <div className="inner-row-right"></div>
        </div>
      </div>
    );
  }

