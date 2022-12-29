import "./Map.scss";
import {useEffect,useRef} from "react";
export default function MapButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
}) {
  const audioRef = useRef();
  const handleClick5 = () => {
    const audioElement = audioRef.current;
    // Play the audio
    audioElement.play();
    showScreen("MapScreen");
    setActive("map");
    if (episodeone == "Flow1.9") {
      setEpisodeOne("Flow1.9.1");
    }
  
  };
  
  return (
    <div id="map-button">
      <div
        className={`button-5 ${color == "map" ? "red" : "black"} ${
          episodeone == "Flow1.9" 
            ? "button-glow"
            : null
        }`}
        type="button"
        name="map"
        onClick={press >= 5 ? handleClick5 : null}
      ></div>
        <audio ref={audioRef} src="https://images.stinkyfruit.com/Button_Press.wav" />
    </div>
  );
}
