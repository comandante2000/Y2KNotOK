import "./BaseReply.scss";
import ChatInfo from "./ChatInfo";
import { useState } from "react";
export default function ChatReply({ person, chat, setOpen }) {
  // admin@redwest.com
  const messagereplies = [
    "You need to chill",
    "Not what I expected to hear",
    "I need you to calm down and    concentrate on our mission",
    "Calm down and concentrate on our mission",
  ];

  var replies= messagereplies[Math.floor(Math.random()* messagereplies.length)];

  const [message, setmessage] = useState();
  const [textmessage, setextmessage] = useState();

  const [openm, setOpenm] = useState(false);

  const truereplies = "Red West Control Center";

  const [rigthreply,setrigthreply]=useState(false);
  const [sendreply,setsendreply]=useState(false);
  const OpenReplay = () => {
    setOpenm(!openm);
  };
  const OpenBack = () => {
    setOpen(!setOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setextmessage(message);
    setmessage("");
    setsendreply(true);
    if (message.toLowerCase() === truereplies.toLowerCase()){
      console.log("yeahhh true mesage");
      setrigthreply(true);
    }
    else{
      console.log("wrong message");
    }
  };



 
  return (
    <div id="pda-base-chat-reply">
      <div className="base-chat-reply-container">
        <div className="chat-info-container">
          <ChatInfo
            person="Krista"
            chat="Waiting on your reply, J. WILL YOU HELP ME?"
          />
           {sendreply?<ChatInfo person="Me" chat={textmessage} />:null}
          {rigthreply?<ChatInfo person="Krista" chat={replies} />:null}
        </div>
        <div className="d-flex justify-content-center txt-area-container mt-3">
          {openm ? (
            <form
              className="d-flex justify-content-center txt-area"
              onSubmit={handleSubmit}
            >
              <textarea
                className="txt-area-bg"
                type="text"
                rows="5"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder="text message"
              />
              {/* <div>
                 <button type="submit"  className="btn-send d-flex justify-content-center align-items-center px-3">Send</button>
              </div> */}
            </form>
          ) : null}
          
        </div>
        <div>
          <div className="d-flex justify-content-around mt-3">
            <div
              className="btn-back d-flex justify-content-center align-items-center px-3"
              type={openm ? "submit" : "button"}
              onClick={openm ? handleSubmit : OpenBack}
            >
              {openm ? "Send" : "Back"}
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
