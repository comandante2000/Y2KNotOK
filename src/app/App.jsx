import Layout from "./pages/layout/Layout";
import Documentation from "./pages/documentation/Documentation";
import { Route, Routes } from "react-router-dom";
import Device from "./pages/Device/Device";
// import RadioPage from "./pages/Intro/Radio";
import IntroVideo from "./pages/Screen/IntroVideo/IntroVideo";
import { useState, useEffect } from "react";
import { db } from "./modules/db";
import axios from "axios";
import { useLiveQuery } from "dexie-react-hooks";

function App() {
  const [newuser, setNewuser]           = useState(true);
  const [currentAsset, setCurrentAsset] = useState('');
  
  const assets = useLiveQuery(
    () => db.assets.where('title').equalsIgnoreCase(currentAsset).toArray(),
    [currentAsset]
  );
  
  const handleAddAssets = () => {
    const assetsToBeCached = [
      {title: 'test-runner', url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/device_without_button.png'},
      {title: 'pda-device', url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/device_without_button.png'},
      {title: 'pda-device-header', url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/TheHeader.png'},
      {title: 'pda-device-button-mail', url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/Message_Normal_state.png'},
      {title: 'pda-device-button-voicemail', url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/Record_Normal_state.png'},
      {title: 'pda-device-button-phone', url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/Phone_Normal_state.png'},
      {title: 'pda-device-button-chat', url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/Chat_Normal_state.png'},
      {title: 'pda-device-button-map', url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/map_Normal_state.png'},
    ];
    assetsToBeCached.forEach((asset, index)=>{
      setCurrentAsset(asset.title);
      if(assets.length === 0){
        axios.get(asset.url, {responseType: 'blob'}).then((response)=>{
          db.assets.add({
            title: asset.title,
            url: asset.url,
            blob: response.data
          });
        });
      }
    });
    
    // axios.get('http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/Boot_Sequence_v10.mp4', {responseType: 'blob'})
    // .then(res => {
    //   const asssetId = db.assets.add({
    //     title: 'intro-video',
    //     url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/Boot_Sequence_v10.mp4',
    //     blob: res.data
    //   });
    // })
    
    // axios.get('http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/audio_bed_ambience.wav', {responseType: 'blob'})
    // .then(res => {
    //   const asssetId = db.assets.add({
    //     title: 'ambience',
    //     url: 'http://images.stinkyfruit.y2k.sgp1.cdn.digitaloceanspaces.com/audio_bed_ambience.wav',
    //     blob: res.data
    //   });
    // })
    
  };
  
  useEffect(()=>{
    if(assets !== undefined){
      handleAddAssets(); 
    }
  },[assets]);
  
  return (
    <div className="container-fluid app d-flex justify-content-center">
      <Routes>
        <Route
          path="/"
          element={
            newuser ? <IntroVideo setNewuser={setNewuser} /> : <Device />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
