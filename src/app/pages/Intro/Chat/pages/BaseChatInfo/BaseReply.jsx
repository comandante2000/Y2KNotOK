import "./BaseReply.scss";
import ChatInfo from "./ChatInfo";
import { useState, useRef, useEffect } from "react";
import { EncryptStorage } from "encrypt-storage";

export default function ChatReply({
  person,
  chat,
  setOpenchat,
  setEpisodeOne,
  episodeone,
  falseReplyCounter,
  setFalseReplyCounter,
}) {
  const [replyMessages, setReplyMessages] = useState([]);
  const [rigthreply, setrigthreply] = useState(false);
  const [rigthreply2, setrigthreply2] = useState(false);
  const [openm, setOpenm] = useState(false);
  const [message, setmessage] = useState("");
  const containerRef = useRef(null);
  const [counter, setCounter] = useState(1);
  const encryptStorage = new EncryptStorage("y2knotokEncrypted");
  const audioRef = useRef();
  const [messagereplies, setMessageReplies] = useState(
    "You need to chill and just tell me where you are right now."
  );

  let correctReplies = [
    {
      chatPerson: "Krista",
      flow: ["Flow1.7.1.1"],
      reply: "Red West Control Center",
    },
    {
      chatPerson: "Timothee HR",
      flow: ["Flow1.10.1", "Flow1.12", "Flow1.11", "Flow1.10.2"],
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
    setOpenchat(!setOpenchat);
  };
  const OpenCancel = () => {
    setOpenm(false);
    setmessage("");
  };

  const handleSubmit = (e) => {
    // { for krista message Flow 1.7" },

    if (episodeone === "Flow1.7.1.1") {
      let userMessage = message.toLowerCase();

      if (
        userMessage.includes("red west control center") ||
        userMessage.includes("red west") ||
        userMessage.includes("control center") ||
        userMessage.includes("command center") ||
        userMessage.includes("red west command center") ||
        userMessage.includes("bunker")
      ) {
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
          const audioElement = audioRef.current;
          // Play the audio
          audioElement.play();
          encryptStorage.removeItem(`chat-storage-${person.toLowerCase()}`);
          encryptStorage.setItem(`chat-storage-${person.toLowerCase()}`, [
            ...replyMessages,
            { person: "Me", chat: message },
            {
              person: "Krista",
              chat: "Don't tell anyone else.We need to keep you safe",
            },
          ]);
          if (episodeone === "Flow1.7.1.1") {
            setTimeout(function () {
              setEpisodeOne("Flow1.8");
            }, 4000);
          }
        }, 2000);
      } else {
        setFalseReplyCounter(falseReplyCounter + 1);
        setReplyMessages([...replyMessages, { person: "Me", chat: message }]);

        setTimeout(function () {
          const audioElement = audioRef.current;
          audioElement.play();

          if (falseReplyCounter >= 2) {
            setReplyMessages([
              ...replyMessages,
              { person: "Me", chat: message },
              {
                person: "Krista",
                chat: "Cool. I get it. Might be better if I don't know.",
              },
            ]);
          } else {
            setReplyMessages([
              ...replyMessages,
              { person: "Me", chat: message },
              {
                person: "Krista",
                chat: messagereplies,
              },
            ]);
          }

          encryptStorage.removeItem(`chat-storage-${person.toLowerCase()}`);
          encryptStorage.setItem(`chat-storage-${person.toLowerCase()}`, [
            ...replyMessages,
            { person: "Me", chat: message },
            {
              person: "Krista",
              chat: messagereplies,
            },
          ]);

          if (episodeone === "Flow1.7.1.1" && falseReplyCounter >= 2) {
            setTimeout(function () {
              setEpisodeOne("Flow1.8");
            }, 4000);
          }
        }, 2000);
      }
      setmessage("");
    }

    // { for Themothee message Flow 1.10" },
    // Yes: Yes, Yep, Yup, Sure, You Bet, OK, K, Okay, affirmative,ya, yeah
    if (
      episodeone === "Flow1.10.1" ||
      episodeone === "Flow1.10.2" ||
      episodeone === "Flow1.12" ||
      episodeone == "Flow1.11"
    ) {
      if (
        message.toLowerCase().includes("yes") ||
        message.toLowerCase().includes("yep") ||
        message.toLowerCase().includes("yup") ||
        message.toLowerCase().includes("sure") ||
        message.toLowerCase().includes("you bet") ||
        message.toLowerCase().includes("ok") ||
        message.toLowerCase().includes(" okay") ||
        message.toLowerCase().includes("affirmative") ||
        message.toLowerCase().includes("yeah") ||
        message.toLowerCase().includes("ya")
      ) {
        setReplyMessages([
          ...replyMessages,
          { person: "Me", chat: message, time: 1 },
        ]);

        setTimeout(function () {
          const audioElement = audioRef.current;
          audioElement.play();
          if (episodeone === "Flow1.10.1" || episodeone === "Flow1.10.2") {
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
          const audioElement = audioRef.current;
          audioRef.current.currentTime = 0;
          audioElement.play();
        }, 6000);

        encryptStorage.removeItem(`chat-storage-timothee`);
        encryptStorage.setItem(`chat-storage-timothee`, [
          ...replyMessages,
          { person: "Me", chat: message },
          {
            person: "Timothee HR",
            chat: "You're safe in your own private IDAHO",
          },
        ]);
        encryptStorage.removeItem(`chat-storage-timothee-right-reply`);
        encryptStorage.setItem(`chat-storage-timothee-right-reply`, true);
        encryptStorage.removeItem(`chat-storage-timothee-right-reply-2`);
        encryptStorage.setItem(`chat-storage-timothee-right-reply-2`, true);
      } else {
        setReplyMessages([
          ...replyMessages,
          { person: "Me", chat: message, time: 1 },
        ]);

        setTimeout(function () {
          const audioElement = audioRef.current;
          audioElement.play();
          setReplyMessages([
            ...replyMessages,
            { person: "Me", chat: message, time: 1 },
            { person: "Timothee HR", chat: "JUST SAY YES, J", time: 1 },
          ]);
        }, 2000);

        encryptStorage.removeItem(`chat-storage-timothee`);
        encryptStorage.setItem(`chat-storage-timothee`, [
          ...replyMessages,
          { person: "Me", chat: message },
          { person: "Timothee HR", chat: "JUST SAY YES, J" },
        ]);
      }
    }
    setmessage("");
    setOpenm(false);
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
      let rigthreply1 = encryptStorage.getItem(
        "chat-storage-timothee-right-reply"
      );
      let rigthreply2 = encryptStorage.getItem(
        "chat-storage-timothee-right-reply-2"
      );
      if (autoSaveChat !== undefined) {
        if (rigthreply1 && episodeone === "Flow1.13") {
          setrigthreply(true);
        }
        if (rigthreply2 && episodeone === "Flow1.13") {
          setrigthreply2(true);
        }
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
      <audio
        ref={audioRef}
        src="https://images.stinkyfruit.com/New_Message-option2.mp3"
      />
    </div>
  );
}
