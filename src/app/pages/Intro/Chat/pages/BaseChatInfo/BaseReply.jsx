import "./BaseReply.scss";
import ChatInfo from "./ChatInfo";
import { useState, useRef, useEffect } from "react";
import { EncryptStorage } from "encrypt-storage";

const messagereplies = [
  "You need to chill",
  "Not what I expected to hear",
  "I need you to calm down and concentrate on our mission",
  "Calm down and concentrate on our mission",
];

export default function ChatReply({
  person,
  chat,
  setOpen,
  setEpisodeOne,
  episodeone,
}) {
  const [replyMessages, setReplyMessages] = useState([]);
  const [rigthreply, setrigthreply] = useState(false);
  const [rigthreply2, setrigthreply2] = useState(false);
  const [openm, setOpenm] = useState(false);
  const [message, setmessage] = useState("");
  const containerRef = useRef(null);
  const encryptStorage = new EncryptStorage("y2knotokEncrypted");
  let replies =
    messagereplies[Math.floor(Math.random() * messagereplies.length)];
  let correctReplies = [
    {
      chatPerson: "Krista",
      flow: ["voicemail1.8.1"],
      reply: "Red West Control Center",
    },
    {
      chatPerson: "Timothee HR",
      flow: ["Flow1.10.1", "Flow1.12", "Flow1.11"],
      reply: "yes",
    },
    { flow: "", reply: "Pilot Butte Substation" },
    { flow: "", reply: "John Day Substation" },
    { flow: "", reply: "Malin Captain Jack Substation" },
    { flow: "", reply: "Brownlee Dam Power House" },
    { flow: "", reply: "Grants Pass Substation" },
    { flow: "", reply: "Pge Elma Substation" },
    { flow: "", reply: "Midpoint Substation" },
    { flow: "", reply: "Hells Canyon Power Station" },
    { flow: "", reply: "Fox Hollow Substation" },
    { flow: "", reply: "Chief Joseph Dam" },
    { flow: "", reply: "Mcnary Substation" },
    { flow: "", reply: "Red West Command Center" },
    { flow: "", reply: "Oxbow Dam Power Station" },
  ];


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
  let truereplies = "Red West Control Center";
  let truerepliesone = "Red West";
  let truerepliestwo = "Control Center";
  let truerepliesthree = "Bunker";
      if (message.toLowerCase() === truereplies.toLowerCase() ||message.toLowerCase() === truerepliesone.toLowerCase()||message.toLowerCase() === truerepliestwo.toLowerCase() ||message.toLowerCase() === truerepliesthree.toLowerCase()) {
        setReplyMessages([...replyMessages, { person: "Me", chat: message }]);
        setTimeout(function () {
          setReplyMessages([
            ...replyMessages,
            { person: "Me", chat: message },
            {
              person: "Krista",
              chat: "Don't tell anyone else.We need to keep you safe",
            },
          ]);

          encryptStorage.removeItem(`chat-storage-${person.toLowerCase()}`);
          encryptStorage.setItem(`chat-storage-${person.toLowerCase()}`, [
            ...replyMessages,
            { person: "Me", chat: message },
            {
              person: "Krista",
              chat: "Don't tell anyone else.We need to keep you safe",
            },
          ]);

          if (episodeone === "voicemail1.8.1") {
            setEpisodeOne("Flow1.8");
          }
        }, 3000);
      }


      if (message == "") {
        setTimeout(function () {
          setReplyMessages([
            ...replyMessages,

            {
              person: "Krista",
              chat: "Cool. I get it. Might be better if I don't know",
            },
          ]);
          encryptStorage.removeItem(`chat-storage-krista`);
          encryptStorage.setItem(`chat-storage-krista`, [
            ...replyMessages,

            {
              person: "Krista",
              chat: "Cool. I get it. Might be better if I don't know.",
            },
          ]);
          if (episodeone === "voicemail1.8.1") {
            setEpisodeOne("Flow1.8");
          }
        }, 3000);
      }
      if (
        message.toLowerCase() !== truereplies.toLowerCase() &&
        message !== ""&& message.toLowerCase() !== truerepliesone.toLowerCase()&& message.toLowerCase() !== truerepliestwo.toLowerCase()&& message.toLowerCase() !== truerepliesthree.toLowerCase()

      ) {
        setReplyMessages([...replyMessages, { person: "Me", chat: message }]);

        setTimeout(function () {
          setReplyMessages([
            ...replyMessages,
            { person: "Me", chat: message },
            { person: "Krista", chat: replies },
          ]);
          if (episodeone === "voicemail1.8.1") {
            setEpisodeOne("Flow1.8");
          }
          encryptStorage.removeItem(`chat-storage-krista`);
          encryptStorage.setItem(`chat-storage-krista`, [
            ...replyMessages,
            { person: "Me", chat: message },
            { person: "Krista", chat: replies },
          ]);
        }, 3000);
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
          { person: "Me", chat: message, time: 1 },
        ]);
        setTimeout(function () {
          if (episodeone === "Flow1.10.1") {
            setEpisodeOne("Flow1.11");
          }
          setrigthreply(true);
          setReplyMessages([
            ...replyMessages,
            { person: "Me", chat: message, time: 1 },
            {
              person: "Timothee HR",
              chat: "You're safe in your own private IDAHO",
              time: 1,
            },
          ]);
        }, 3000);
        setTimeout(function () {
          setrigthreply2(true);
        }, 4000);

        encryptStorage.removeItem(`chat-storage-timothee`);
        encryptStorage.setItem(`chat-storage-timothee`, [
          ...replyMessages,
          { person: "Me", chat: message },
          {
            person: "Timothee HR",
            chat: "You're safe in your own private IDAHO",
          },
        ]);
      } else {
        setReplyMessages([
          ...replyMessages,
          { person: "Me", chat: message, time: 1 },
        ]);

        setTimeout(function () {
          setReplyMessages([
            ...replyMessages,
            { person: "Me", chat: message, time: 1 },
            { person: "Timothee HR", chat: "Jusy say YES, J", time: 1 },
          ]);
        }, 3000);

        encryptStorage.removeItem(`chat-storage-timothee`);
        encryptStorage.setItem(`chat-storage-timothee`, [
          ...replyMessages,
          { person: "Me", chat: message },
          { person: "Timothee HR", chat: "Jusy say YES, J" },
        ]);
      }
    }
    setmessage("");
  };

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [handleSubmit]);

  useEffect(() => {
    if (person === "Krista") {
      let autoSaveChat = encryptStorage.getItem("chat-storage-krista");
      if (autoSaveChat !== undefined) {
        setReplyMessages(autoSaveChat);
      }
    }
    if (person === "Timothee HR") {
      let autoSaveChat = encryptStorage.getItem("chat-storage-timothee");
      if (autoSaveChat !== undefined) {
        setReplyMessages(autoSaveChat);
      }
    }
  }, []);

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
            <ChatInfo
              person={reply.person}
              chat={reply.chat}
              time={reply.time}
            />
          ))}
        </div>

        {rigthreply ? (
          <div classname="image-reply d-flex justify-content-between align-items-center">
            <div className="imageyes d-flex justify-content-center align-items-center "></div>
          </div>
        ) : null}

        {rigthreply2 ? (
          <ChatInfo
            person={"Timothee HR"}
            chat={" ALSO, TRUST ME, YOU CAN’T TRUST KRISTA"}
          />
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
