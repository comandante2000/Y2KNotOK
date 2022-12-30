import "./Chat.scss";
import { useEffect, useRef } from "react";
export default function ChatButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
  openchat,
  setOpenchat,
}) {
  const audioRef = useRef();
  const audioRefchat = useRef();
  let chatpermission = ["Flow1.10", "Flow1.7.1"];
  const handleClick4 = () => {
    if(openchat){
      setOpenchat(false)    }
   
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
  useEffect(() => {
    const audioElementchat = audioRefchat.current;
    if (chatpermission.includes(episodeone)) {
      audioRefchat.current.muted = false;
      audioElementchat.play();
    }
  },[episodeone]);
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
      <audio
        ref={audioRef}
        src="https://images.stinkyfruit.com/Button_Press.wav"
      />

      <audio
        // loop={chatpermission.includes(episodeone)?true:false}
        ref={audioRefchat}
        src="https://images.stinkyfruit.com/New_Message-option2.wav"
      />
    </div>
  );
}
