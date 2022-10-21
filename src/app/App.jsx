import Layout from "./pages/layout/Layout";
import Documentation from "./pages/documentation/Documentation";
import { Route, Routes } from "react-router-dom";
import Device from "./pages/Device/Device";
// import RadioPage from "./pages/Intro/Radio";

function App() {
  return (
    <div className="container-fluid app d-flex justify-content-center">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/Device" element={<Device />}/>
   
      </Routes>
     
    </div>
  );
}

export default App;
