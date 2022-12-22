import { Route, Routes } from "react-router-dom";
import Device from "./pages/Device/Device";
import IntroVideo from "./pages/Screen/IntroVideo/IntroVideo";
import { useState, useEffect } from "react";
import { EncryptStorage } from "encrypt-storage";

function App() {
  const [newuser, setNewuser]           = useState(true);
  const [currentAsset, setCurrentAsset] = useState('');
  const encryptStorage                  = new EncryptStorage('y2knotokEncrypted');
  const cacheImages = async (assets) => {
     assets.map(asset => {
        const img = new Image();
        img.src = asset;
     }); 
  };
  
  useEffect(()=>{
    let assets = [
      'https://images.stinkyfruit.com/device_without_button.png',
      'https://images.stinkyfruit.com/TheHeader.png',
      'https://images.stinkyfruit.com/PDA_Crack_Screen.svg',
      'https://images.stinkyfruit.com/scroll-bar-bg.png',
      'https://images.stinkyfruit.com/Message_Normal_state.png',
      'https://images.stinkyfruit.com/Record_Normal_state.png',
      'https://images.stinkyfruit.com/Phone_Normal_state.png',
      'https://images.stinkyfruit.com/Chat_Normal_state.png',
      'https://images.stinkyfruit.com/map_Normal_state.png',
      'https://images.stinkyfruit.com/1920x1080–-4.webp',
      'https://images.stinkyfruit.com/3890x2160-2.webp',
      'https://images.stinkyfruit.com/popup_container_right.svg',
      'https://images.stinkyfruit.com/welcome_to_y2knotok.svg',
      'https://images.stinkyfruit.com/3840x2160v5–2.png',
    ];
    cacheImages(assets);
    
    //**Remove Existing LocalStorage */
    encryptStorage.removeItem(`chat-storage-krista`);
    encryptStorage.removeItem(`chat-storage-timothee`);
  },[]);
  
  return (
    <div className={`container-fluid app d-flex justify-content-center ${!newuser ? 'fadeInOutApp' : ""}`}>
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
