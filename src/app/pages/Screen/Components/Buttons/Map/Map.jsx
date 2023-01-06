import "./Map.scss";
import {useEffect,useRef} from "react";
export default function MapButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne, SetVideo
}) {
  let mappermission =["Flow1.9"]
  const audioRef = useRef();
  const audioRefmap = useRef();
  const handleClick5 = () => {

    if (episodeone === "Flow1.11") {
    
      SetVideo("Episode2");
   
  }
    const audioElement = audioRef.current;
    // Play the audio
    audioRef.current.currentTime = 0;
    audioElement.play();
    showScreen("MapScreen");
    setActive("map");
    if (episodeone == "Flow1.9") {
      setEpisodeOne("Flow1.9.1");
    }
  
  };
  
  useEffect(() => {
    const audioElementmap = audioRefmap.current;
    if (mappermission.includes(episodeone)) {
      audioRefmap.current.muted = false; 
      audioElementmap.play();
    }
  }, [episodeone]);

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
        <audio
        // loop={mappermission.includes(episodeone)?true:false}
        ref={audioRefmap}
        src="https://images.stinkyfruit.com/sound_all_btn.wav"
      />
    </div>
  );
}
