import "./Phone.scss";
import {useEffect} from "react";
export default function PhoneButton({ showScreen, setActive, color, press , episodeone}) {
  const handleClick3 = () => {
    showScreen("PhoneScreen");
    setActive("phone");
  };

  useEffect(() =>{

    if(episodeone="Flow1.12"){
      console.log("PhoneButton");
    }
    console.log(episodeone);
  })
  
  return (
    <div id="phone-button">
      <div
        className={`button-3 ${color == "phone" ? "red" : "black"}`}
        type="button"
        name="phone"
        onClick={press >= 5 ? handleClick3 : null}
      ></div>
    </div>
  );
}
