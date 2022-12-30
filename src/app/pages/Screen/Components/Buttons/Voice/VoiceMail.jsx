import "./VoiceMail.scss";
import { useRef,useEffect } from 'react';
export default function VoiceMailButton({
  showScreen,
  setActive,
  color,
  press,
  setpress,
  episodeone,
  setEpisodeOne,
}) {


  let voicepermission =["mailpop","Flow1.8","notallowed"]
  const audioRef = useRef();
  const audioRefvoice = useRef();
  const handleClick = () => {
    const audioElement = audioRef.current;
    // Play the audio
    audioRef.current.currentTime = 0;
    audioElement.play();
    showScreen("VoicemailScreen");
    setActive("voice");
    setpress(function (prevCount) {
      return (prevCount += 1);
    });
    if (episodeone == "mailpop") {
      setEpisodeOne("Flow1.7");
    }
    if (episodeone == "Flow1.8") {
      setEpisodeOne("Flow1.8.1");
    }
    if (episodeone == "notallowed") {
      setEpisodeOne("notallowedsound");
    }
   
  };
  useEffect(() => {
    const audioElementvoice = audioRefvoice.current;
    if (voicepermission.includes(episodeone)) {
      audioRefvoice.current.muted = false; 
      audioElementvoice.play();
    }
  }, );
  return (
    <div id="voice-button">
      <div
        className={`button-1 ${color == "voice" ? "red" : "black"} ${
          episodeone == "notallowed" ||
          episodeone == "mailpop" ||
          episodeone == "Flow1.8"
            ? "button-glow"
            : null
        }`}
        type="button"
        name="voice"
        onClick={press >= 5 ? handleClick : null}
      ></div>
      <audio ref={audioRef} src="https://images.stinkyfruit.com/Button_Press.wav" />
      <audio
        // loop={voicepermission.includes(episodeone)?true:false}
        ref={audioRefvoice}
        src="https://images.stinkyfruit.com/sound_all_btn.wav"
      />
    </div>
  );
}
