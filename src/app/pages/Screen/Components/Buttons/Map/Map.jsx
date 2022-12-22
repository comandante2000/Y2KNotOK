import "./Map.scss";

export default function MapButton({
  showScreen,
  setActive,
  color,
  press,
  episodeone,
  setEpisodeOne,
}) {
  const handleClick5 = () => {
    showScreen("MapScreen");
    setActive("map");
    if (episodeone == "Flow1.9") {
      setEpisodeOne("Flow1.9.1");
    }
    if (episodeone == "Flow1.11") {
      setEpisodeOne("Flow1.12");
    }
  };
  
  return (
    <div id="map-button">
      <div
        className={`button-5 ${color == "map" ? "red" : "black"} ${
          episodeone == "Flow1.9" || episodeone == "Flow1.11"
            ? "button-glow"
            : null
        }`}
        type="button"
        name="map"
        onClick={press >= 5 ? handleClick5 : null}
      ></div>
    </div>
  );
}
