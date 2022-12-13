import "./BaseReply.scss";
import ChatInfo from "./ChatInfo";
import { useState } from "react";
export default function ChatReply({ person, chat ,setOpen}) {
  // admin@redwest.com
  const [replies, setReply] = useState([
    {
      id: 1,
      text: "You need to chill",
    },
    {
      id: 2,
      text: "Not what I expected to hear",
    },
    {
      id: 3,
      text: "I need you to calm down and    concentrate on our mission",
    },
    {
      id: 4,
      text: "Calm down and concentrate on our mission",
    },
  ]);




  const [message, setmessage] = useState("");

  const [openm, setOpenm] = useState(false);
  console.log("replies", replies);
  console.log("message", message);
  const OpenReplay = () => {
    setOpenm(true);
  };
  const OpenBack = () => {
    setOpen(false);
  };


  

  return (
    <div id="pda-base-chat-reply">
      <div className="base-chat-reply-container">
        <div className="chat-info-container">
          <ChatInfo
            person="Krista"
            chat="Waiting on your reply, J. WILL YOU HELP ME?"
          />
          <ChatInfo person="Me" chat="NO" />
       
        </div>
        <div className="d-flex justify-content-center txt-area-container mt-3">
          {openm ? (
            <div className="d-flex justify-content-center txt-area">
              <textarea className="txt-area-bg" type="text" rows="5" value={setmessage} onChange={setmessage}>{message}</textarea>
            </div>
          ) : null}
        </div>
        <div>
          <div className="d-flex justify-content-around mt-3">
            <div
              className="btn-back d-flex justify-content-center align-items-center px-3"
              type="button"
              onClick={OpenBack}
            >
              Back
            </div>
            <div
              className="btn-reply d-flex justify-content-center align-items-center px-3"
              type="button"
              onClick={OpenReplay}
            >
              Reply
            </div>
            <div
              className="btn-delete d-flex justify-content-center align-items-center px-3"
              type="button"
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
