import "./Phone.scss";
import {useEffect,useRef} from "react";
export default function PhoneButton({ showScreen, setActive, color, press , episodeone}) {

  const audioRef = useRef();
  const handleClick3 = () => {

    if (episodeone === "Flow1.11") {
    
      SetVideo("Episode2");
   
  }
    const audioElement = audioRef.current;
    // Play the audio
    audioRef.current.currentTime = 0;
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
