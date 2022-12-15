import "./BaseReply.scss";
import ChatInfo from "./ChatInfo";
import { useState } from "react";
export default function ChatReply({
  person,
  chat,
  setOpen,
  setAccesmail,
  accessmail,
}) {
  // admin@redwest.com

  const messagereplies = [
    "You need to chill",
    "Not what I expected to hear",
    "I need you to calm down and    concentrate on our mission",
    "Calm down and concentrate on our mission",
  ];

  var replies =
    messagereplies[Math.floor(Math.random() * messagereplies.length)];
    

  const [message, setmessage] = useState();
  const [textmessage, setextmessage] = useState();

  const [replyMessages, setReplyMessages] = useState([
    // { person: "Krista", chat: "" },
    // { person: "Me", chat: "" },
  ]);

  const [openm, setOpenm] = useState(false);

  const truereplies = "Red West Control Center";

  const [rigthreply, setrigthreply] = useState(false);

  const [sendreply, setsendreply] = useState(false);

  const OpenReplay = () => {
    setOpenm(!openm);
  };
  const OpenBack = () => {
    setOpen(!setOpen);
  };

  const handleSubmit = (e) => {
       // { for krista message Flow 1.7" },
    if (accessmail === "voicemail1.8.1") {
    if (message.toLowerCase() === truereplies.toLowerCase()) {
      setReplyMessages([
        ...replyMessages,
        { person: "Me", chat: message },
        { person: "Krista", chat: replies },
      ]);
      // setrigthreply(true);
      console.log("yeahhmessage");
      if (accessmail === "voicemail1.8.1") {
        setAccesmail("replyflow1.8");
      }
      console.log("message:",accessmail);
    } else {
      setReplyMessages([
        ...replyMessages,
        { person: "Me", chat: message },
        { person: "Krista", chat: replies },
      ]);
      console.log("wrong message");
    }
  }

// { for Themothee message Flow 1.10" },

if (accessmail === "Flow1.10.1") {
  if (message.toLowerCase() === "yes".toLowerCase()) {

    setReplyMessages([
      ...replyMessages,
      { person: "Me", chat: message },
      { person: "Timothee", chat: "You're safe in your own private IDAHO" },
    ]);
    setrigthreply(true);
    console.log("yeahhmessage");

    if (accessmail === "Flow1.10.1") {
      setAccesmail("Flow1.11");
    }
    console.log("message:",accessmail);
  } else {
    setReplyMessages([
      ...replyMessages,
      { person: "Me", chat: message },
      { person: "Timothee", chat: "Jusy say YES, J" },
    ]);
    console.log("wrong message");
  }
}



  };

  return (
    <div id="pda-base-chat-reply">
      <div className="base-chat-reply-container">
        <div className="chat-info-container">
          <ChatInfo
            person={accessmail=="Flow1.10.1"?"Timothee":"Krista"}
            chat={accessmail=="Flow1.10.1"?"Waiting on your":"Where are you n.."}
            accessmail={accessmail}
            rigthreply={rigthreply}
          />
          {replyMessages.map((reply, index) => (
            <ChatInfo person={reply.person} chat={reply.chat} />
          ))}
        </div>

        {/* { rigthreply?
        <div classname="image-reply d-flex justify-content-between align-items-center">
            <div className="imageyes d-flex justify-content-center align-items-center "></div>
          </div>
          :null} */}

        
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
  );
}
