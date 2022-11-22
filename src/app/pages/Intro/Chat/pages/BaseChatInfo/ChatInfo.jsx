import "./ChatInfo.scss";
export default function ChatInfo({ person, chat }) {
  // admin@redwest.com

  return (
    <div id="pda-base-chat-info">
      <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5 position-relative">
        <div className="chat-icon "></div>

        <div>
          <div className="d-flex">
            <div className="person-name">{person}</div>
            <div className="position-absolute top-0 end-0 me-1">12/30</div>
          </div>
          <div className="chat-info">
            <div className="person-chat ">{chat}</div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
