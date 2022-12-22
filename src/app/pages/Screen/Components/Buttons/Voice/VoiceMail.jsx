import "./VoiceMail.scss";

export default function VoiceMailButton({
  showScreen,
  setActive,
  color,
  press,
  setpress,
  episodeone,
  setEpisodeOne,
}) {
  const handleClick = () => {
    showScreen("VoicemailScreen");
    setActive("voice");
    setpress(function (prevCount) {
      return (prevCount += 1);
    });
    if (episodeone == "mailpop") {
      setEpisodeOne("voicemail1.7");
    }
    if (episodeone == "Flow1.8") {
      setEpisodeOne("Flow1.8.1");
    }
  };
  
  return (
    <div id="voice-button">
      <div
        className={`button-1 ${color == "voice" ? "red" : "black"} ${
          press === 6 || episodeone == "mailpop" || episodeone == "Flow1.8"
            ? "button-glow"
            : null
        }`}
        type="button"
        name="voice"
        onClick={press >= 5 ? handleClick : null}
      ></div>
    </div>
  );
}
