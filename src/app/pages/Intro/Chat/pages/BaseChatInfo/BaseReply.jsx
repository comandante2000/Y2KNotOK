import "./BaseReply.scss";
import ChatInfo from "./ChatInfo";
import { useState,useRef,useEffect } from "react";
export default function ChatReply({
  person,
  chat,
  setOpen,
  setEpisodeOne,
  episodeone,
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
  // ||"Pilot Butte Substation"|| "Malin Captain Jack Substation"|| "John Day Substation"|| "Brownlee Dam Power House"|| "Grants Pass Substation"|| "Pge Elma Substation"|| "Midpoint Substation"|| "Hells Canyon Power Station"|| "Fox Hollow Substation"|| "Chief Joseph Dam"|| "Mcnary Substation"|| "Red West Command Center"|| "Oxbow Dam Power Station"
  let truereplies = "Red West Control Center";

  const [rigthreply, setrigthreply] = useState(false);

  const [sendreply, setsendreply] = useState(false);

  const OpenReplay = () => {
    setOpenm(true);
  };
  const OpenBack = () => {
    setOpen(!setOpen);
  };
  const OpenCancel = () => {
    setOpenm(false);
    setmessage("");
  };

  const handleSubmit = (e) => {
    // { for krista message Flow 1.7" },
    if (episodeone === "voicemail1.8.1") {
      if (message.toLowerCase() === truereplies.toLowerCase()) {
        setReplyMessages([
          ...replyMessages,
          { person: "Me", chat: message },
        ]);
        setTimeout(function() {
           setReplyMessages([
          ...replyMessages,
          { person: "Me", chat: message },
          { person: "Krista", chat: replies },
        ]);
        // setrigthreply(true);
      
        if (episodeone === "voicemail1.8.1") {
          setEpisodeOne("Flow1.8");
        }
      
        }, 2000);
      


      } else {

          setReplyMessages([
            ...replyMessages,
            { person: "Me", chat: message },
          
          ]);
        
        setTimeout(function() {

          setReplyMessages([
            ...replyMessages,
            { person: "Me", chat: message },
            { person: "Krista", chat: replies },
          ]);
        
        }, 2000);
      

      }
      setmessage("");
    }

    // { for Themothee message Flow 1.10" },

    if (
      episodeone === "Flow1.10.1" ||
      episodeone === "Flow1.12" ||
      episodeone == "Flow1.11"
    ) {
      if (message.toLowerCase() === "yes".toLowerCase()) {
        setReplyMessages([
          ...replyMessages,
          { person: "Me", chat: message },
        
        ]);
        setTimeout(function () {
          setrigthreply(true);
          setReplyMessages([
            ...replyMessages,
            { person: "Me", chat: message },
            {
              person: "Timothee",
              chat: "You're safe in your own private IDAHO",
            },
          ]);
        }, 1000);

        if (episodeone === "Flow1.10.1") {
          setEpisodeOne("Flow1.11");
        }
      
      } else {

        setReplyMessages([
          ...replyMessages,
          { person: "Me", chat: message },
        ]);

        setTimeout(function() {
          setReplyMessages([
          ...replyMessages,
          { person: "Me", chat: message },
          { person: "Timothee", chat: "Jusy say YES, J" },
        ]);
     
        }, 1000);
       
      }
    }
    setmessage("");
  };

  const containerRef = useRef(null);

  useEffect(() => {
 
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  
  }, [handleSubmit]);
  

  
  return (
    <div id="pda-base-chat-reply">
      <div ref={containerRef} className="base-chat-reply-container">
        <div   className="chat-info-container">
          <ChatInfo
            person={
              episodeone == "Flow1.10.1" ||
              episodeone == "Flow1.11" ||
              episodeone === "Flow1.12"
                ? "Timothee"
                : "Krista"
            }
            chat={
              episodeone == "Flow1.10.1" ||
              episodeone == "Flow1.11" ||
              episodeone === "Flow1.12"
                ? "Waiting on your reply, J. WILL YOU HELP ME?"
                : "Where are you? Everyone is looking for you"
            }
            episodeone={episodeone}
            rigthreply={rigthreply}
          />
          {replyMessages.map((reply, index) => (
            <ChatInfo person={reply.person} chat={reply.chat} />
          ))}
        </div>

        {rigthreply ? (
          <div classname="image-reply d-flex justify-content-between align-items-center">
            <div className="imageyes d-flex justify-content-center align-items-center "></div>
          </div>
        ) : null}
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
      <div className="btn-container">
        <div className="button-container d-flex justify-content-between">
          <div
            className="btn-back d-flex justify-content-center align-items-center px-3"
            type={openm ? "submit" : "button"}
            onClick={openm ? handleSubmit : OpenBack}
          >
            {openm ? "Send" : "Back"}
          </div>
          <div
            className={`${
              openm ? "unactive" : "btn-reply"
            } d-flex justify-content-center align-items-center px-3`}
            type="button"
            onClick={OpenReplay}
          >
            Reply
          </div>
          <div
            className={`${
              openm ? "btn-reply " : "unactive"
            } d-flex justify-content-center align-items-center px-3`}
            type="button"
            onClick={OpenCancel}
          >
            {openm ? "Cancel" : "Delete"}
          </div>
        </div>
      </div>
    </div>
  );
}
