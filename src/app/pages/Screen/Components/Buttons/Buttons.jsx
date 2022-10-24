import "./Buttons.scss";import RadioButton from "../../Components/Buttons/Radio/Radio";
import MailButton from "../../Components/Buttons/Mail/Mail"; 
import PhoneButton from "../../Components/Buttons/Phone/Phone";
import MessageButton from "../../Components/Buttons/Message/Message";
import MapButton from "../../Components/Buttons/Map/Map"; 
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Buttons({showScreen}) {
  const [red,setRed] = useState("black")
  return (
    <div id="pda-buttons">
      <div className =" row-1">  
        <div className="buttns d-inline-flex">
          <li className="button-list d-flex justify-content-evenly mt-1"> 
            <MailButton showScreen={showScreen} />
            <RadioButton  showScreen={showScreen}/>  
            <PhoneButton showScreen={showScreen}/>
            <MessageButton showScreen={showScreen}/>  
            <MapButton showScreen={showScreen}/>  
          </li>
        </div>          
    </div> 
    </div> 
  );
}                
             
   