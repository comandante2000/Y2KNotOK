import "./Phone.scss";
import {useEffect,useRef} from "react";
export default function PhoneButton({ showScreen, setActive, color, press , episodeone}) {

  const audioRef = useRef();
  const handleClick3 = () => {
    const audioElement = audioRef.current;
    // Play the audio
    audioElement.play();
    showScreen("PhoneScreen");
    setActive("phone");
  };

  useEffect(() =>{

    if(episodeone="Flow1.12"){
   
    }
   
  })
  
  return (
    <div id="phone-button">
      <div
        className={`button-3 ${color == "phone" ? "red" : "black"}`}
        type="button"
        name="phone"
        onClick={press >= 5 ? handleClick3 : null}
      ></div>
        <audio ref={audioRef} src="https://images.stinkyfruit.com/Button_Press.wav" />
    </div>
  );
}
