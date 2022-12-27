import "./Chat.scss";

export default function ChatButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
}) {

  
  const handleClick4 = () => {
 
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
    </div>
  );
}
