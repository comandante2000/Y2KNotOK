import "./Chat.scss";
import {useEffect,useRef} from "react";
export default function ChatButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
}) {

  const audioRef = useRef();

  
  const handleClick4 = () => {
    const audioElement = audioRef.current;
    // Play the audio
    audioRef.current.currentTime = 0;
    audioElement.play();
 
    showScreen("MessageScreen");
    setActive("message");
    if (episodeone === "Flow1.10") {
      setEpisodeOne("Flow1.10.1");
    }
  };

  return (
    <div id="chat-button">
      <div
        className={`button-4 ${color == "message" ? "red" : "black"} ${
          episodeone === "Flow1.7.1" ||
          episodeone === "Flow1.7.1" ||
          episodeone === "Flow1.10"
            ? "button-glow"
            : null
        }`}
        type="button"
        name="chat"
        onClick={press >= 5 ? handleClick4 : null}
      ></div>
         <audio ref={audioRef} src="https://images.stinkyfruit.com/Button_Press.wav" />
    </div>
  );
}
