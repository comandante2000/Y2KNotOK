import Layout from "./pages/layout/Layout";
import Documentation from "./pages/documentation/Documentation";
import { Route, Routes } from "react-router-dom";
import Device from "./pages/Device/Device";
// import RadioPage from "./pages/Intro/Radio";
import IntroVideo from "./pages/Screen/IntroVideo/IntroVideo";
import { useState, useEffect } from "react";


function App() {
  const [newuser,setNewuser]= useState (true);
  return (
    <div className="container-fluid app d-flex justify-content-center">
      <Routes>
        <Route path="/" element={newuser?<IntroVideo setNewuser={setNewuser}/>:<Device />} />
      </Routes>
     
    </div>
  );
}

export default App;
