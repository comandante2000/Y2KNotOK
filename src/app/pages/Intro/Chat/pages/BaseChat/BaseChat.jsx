import "./BaseChat.scss";
export default function BaseChat({ person, chat, episodeone }) {
  // admin@redwest.com

  return (
    <div id="pda-base-chat">
      <div className=" d-flex py-0 g-5 position-relative base-chat-container">
        <div className="icon-container d-flex align-items-center">
          <div
            className={
              episodeone == "voicemail1.8" || episodeone == "Flow1.10.1"
                ? "blink-red-icon"
                : "unred-icon"
            }
          ></div>
          <div className="chat-icon"></div>
        </div>
        <div className="info-container me-3 m-auto">
          <div className="d-flex w-100">
            <div className="person-name w-50">{person}</div>
            <div className="w-50 chat-date text-end">12/30</div>
          </div>
          <div>
            <div className="person-chat">{chat}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
