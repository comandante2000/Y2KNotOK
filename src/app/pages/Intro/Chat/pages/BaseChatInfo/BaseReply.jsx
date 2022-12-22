import "./BaseReply.scss";
import ChatInfo from "./ChatInfo";
import { useState,useRef,useEffect } from "react";
import { EncryptStorage } from "encrypt-storage";

const messagereplies = [
  "You need to chill",
  "Not what I expected to hear",
  "I need you to calm down and concentrate on our mission",
  "Calm down and concentrate on our mission",
];

export default function ChatReply({person, chat, setOpen, setEpisodeOne, episodeone}) {
  
  const [replyMessages, setReplyMessages] = useState([]);
  const [rigthreply, setrigthreply]       = useState(false);
  const [openm, setOpenm]                 = useState(false);
  const [message, setmessage]             = useState('');
  const containerRef                      = useRef(null);
  const encryptStorage                    = new EncryptStorage('y2knotokEncrypted');
  let replies                             = messagereplies[Math.floor(Math.random() * messagereplies.length)];
  let correctReplies                      = [
                                             {chatPerson: 'Krista', flow: ['voicemail1.8.1'], reply: 'Red West Control Center'},
                                             {chatPerson: 'Timothee HR', flow: ['Flow1.10.1', 'Flow1.12', 'Flow1.11'], reply: 'yes'},
                                             {flow: '', reply: 'Pilot Butte Substation'},
                                             {flow: '', reply: 'John Day Substation'},
                                             {flow: '', reply: 'Malin Captain Jack Substation'},
                                             {flow: '', reply: 'Brownlee Dam Power House'},
                                             {flow: '', reply: 'Grants Pass Substation'},
                                             {flow: '', reply: 'Pge Elma Substation'},
                                             {flow: '', reply: 'Midpoint Substation'},
                                             {flow: '', reply: 'Hells Canyon Power Station'},
                                             {flow: '', reply: 'Fox Hollow Substation'},
                                             {flow: '', reply: 'Chief Joseph Dam'},
                                             {flow: '', reply: 'Mcnary Substation'},
                                             {flow: '', reply: 'Red West Command Center'},
                                             {flow: '', reply: 'Oxbow Dam Power Station'},
                                            ]
  let truereplies                         = "Red West Control Center";
  
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
        
        encryptStorage.removeItem(`chat-storage-${person.toLowerCase()}`);
        encryptStorage.setItem(`chat-storage-${person.toLowerCase()}`, [...replyMessages, { person: "Me", chat: message }, { person: "Krista", chat: replies }]);
          
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
          encryptStorage.removeItem(`chat-storage-krista`);
          encryptStorage.setItem(`chat-storage-krista`, [...replyMessages, { person: "Me", chat: message }, { person: "Krista", chat: replies }]);
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
              person: "Timothee HR",
              chat: "You're safe in your own private IDAHO",
            },
          ]);
        }, 1000);
        encryptStorage.removeItem(`chat-storage-timothee`);
        encryptStorage.setItem(`chat-storage-timothee`, [...replyMessages, { person: "Me", chat: message }, { person: "Timothee HR", chat: "You're safe in your own private IDAHO" }]);
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
          { person: "Timothee HR", chat: "Jusy say YES, J" },
        ]);
     
        }, 1000);
        encryptStorage.removeItem(`chat-storage-timothee`);
        encryptStorage.setItem(`chat-storage-timothee`, [...replyMessages, { person: "Me", chat: message }, { person: "Timothee HR", chat: 'Jusy say YES, J' }]);
      }
    }
    setmessage("");
  };

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [handleSubmit]);
  
  useEffect(()=>{
    if(person === 'Krista'){
      let autoSaveChat = encryptStorage.getItem("chat-storage-krista");
      if(autoSaveChat !== undefined) {
        setReplyMessages(autoSaveChat);
      }
    }
    if(person === 'Timothee HR'){
      let autoSaveChat = encryptStorage.getItem("chat-storage-timothee");
      if(autoSaveChat !== undefined) {
        setReplyMessages(autoSaveChat);
      }
    }

  },[]);
  
  return (
    <div id="pda-base-chat-reply">
      <div ref={containerRef} className="base-chat-reply-container">
        <div className="chat-info-container">
          <ChatInfo
            person={person}
            chat={chat}
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
