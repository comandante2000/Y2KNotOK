import "./ChatInfo.scss";
export default function ChatInfo({ person, chat, episodeone, rigthreply ,time}) {
  // admin@redwest.com


  return (
    <div id="pda-base-chat-info">
      <div className=" d-flex py-0 g-5 position-relative Chat-Info-container">
        <div className="icon-container d-flex justify-content-center align-items-center">
          <div className="chat-icon "></div>
        </div>
        <div className="info-container me-3 dsfdfsdf">
          <div className="d-flex w-100">
            <div className="person-name w-75">{person}</div>
            <div className="w-25 chat-date text-end">12/30</div>
          </div>
          <div className="chat-info d-flex">
            <div className="person-chat w-75">{chat}</div>
            <div className="chat-time-container w-25 text-end">
              <p className="chat-time">
                {/* {person === 'Timothee HR' || chat == "yes"
                  ? "6:25 am"
                  : "6:15 am"} */}{time == 1|| person =="Timothee HR"?"6:25 am":"6:15 am"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
