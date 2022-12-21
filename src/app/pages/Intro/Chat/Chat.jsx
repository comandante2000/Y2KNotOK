// import "./Chat.scss";
// import Time from "../../Screen/Components/Time/Time";
// import Header from "../../Screen/Components/Headers/Header";
// import BaseChat from "./pages/BaseChat/BaseChat";
// import BaseChatUnred from "./pages/BaseChatUnred/BaseChatUnred";
// import ChatInfo from "./pages/BaseChatInfo/ChatInfo";
// import ChatReply from "./pages/BaseChatInfo/BaseReply";
// import { useState } from "react";
// export default function ChatPage({ episodeone, setEpisodeOne }) {
//   const [open, setOpen] = useState(false);
//   const [hide, setHide] = useState(true);
//   const OpenMessage = () => {
//     setOpen(true);
//     setHide(false);
//     if (episodeone == "voicemail1.8") {
//       setEpisodeOne("voicemail1.8.1");
//     }
//   };

//   return (
//     <div id="pda-chat-screen">
//       <div className=" row-2 d-flex justify-content-center">
//         <div className="inner-row-left"></div>
//         <div className="inner-row-center">
//           <Time />
//           <Header name="Text" />

//           {open ? (
//             <ChatReply
//               setOpen={setOpen}
//               setEpisodeOne={setEpisodeOne}
//               episodeone={episodeone}
//             />
//           ) : (
//             <div
//               type="button"
//               onClick={
//                 episodeone == "notallowed " ||
//                 episodeone == "allow" ||
//                 episodeone == "allowed" ||
//                 episodeone == "mailpop" ||
//                 episodeone == "voicemail1.7 "
//                   ? null
//                   : OpenMessage
//               }
//             >
//               <div className="container-message">
//                 <BaseChat
//                   person={episodeone == "Flow1.10.1" ? "Timothee" : "Krista"}
//                   chat={
//                     episodeone == "Flow1.10.1"
//                       ? "Waiting on your.."
//                       : "Where are you?"
//                   }
//                   episodeone={episodeone}
//                 />
//                 <BaseChatUnred
//                   person={episodeone == "Flow1.10.1" ? "Krista" : "Timothee"}
//                   chat="Where are you?"
//                 />
//                 <BaseChatUnred person=" Finn " chat=" Where are you?" />
//                 <BaseChatUnred person="Krista " chat="The meeting has..." />
//                 <BaseChatUnred person="Mateo" chat="Karoake tonight?" />
//                 <BaseChatUnred
//                   person="Timothee HR"
//                   chat="Prepare for open..."
//                 />
//                 <BaseChatUnred person="Mom" chat="did i do it right?" />
//                 <BaseChatUnred person="Akari" chat="Crescent Lake " />
//                 <BaseChatUnred person="Lakin" chat="NYE!" />
//                 <BaseChatUnred person="Sylvie" chat="resend code" />
//               </div>
//             </div>
//           )}
//           {hide ? (
//             <div className="btn-delete-container d-flex justify-content-end">
//               <div className="btn-delete d-flex justify-content-center align-items-center">
//                 Delete
//               </div>
//             </div>
//           ) : null}
//         </div>
//         <div className="inner-row-right"></div>
//       </div>
//     </div>
//   );
// }

import "./Chat.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import BaseChat from "./pages/BaseChat/BaseChat";
import BaseChatUnred from "./pages/BaseChatUnred/BaseChatUnred";
import ChatInfo from "./pages/BaseChatInfo/ChatInfo";
import ChatReply from "./pages/BaseChatInfo/BaseReply";
import { useState, useEffect } from "react";
export default function ChatPage({ episodeone, setEpisodeOne }) {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(true);

  const [listchat, setlistchat] = useState([
    {
      name: "Krista ",
      subject: "The meeting has...",
      episodeone: "",
      clickable: false,
    },
    {
      name: "Mateo",
      subject: "Karoake tonight?",
      episodeone: "",
      clickable: false,
    },
    {
      name: "Timothee HR",
      subject: "Prepare for open...",
      episodeone: "",
      clickable: false,
    },
    {
      name: "Mom",
      subject: "did i do it right?",
      episodeone: "",
      clickable: false,
    },
    {
      name: "Akari",
      subject: "Crescent Lake ",
      episodeone: "",
      clickable: false,
    },
    {
      name: "Lakin",
      subject: "NYE!",
      clickable: false,
      episodeone: "",
    },
    {
      name: "Sylvie",
      subject: "resend code",
      clickable: false,
      episodeone: "",
    },
  ]);

  const OpenMessage = () => {
    setOpen(true);
    setHide(false);
    if (episodeone == "voicemail1.8") {
      setEpisodeOne("voicemail1.8.1");
    }
  };
  useEffect(() => {
    if (episodeone == "voicemail1.8"||episodeone == "voicemail1.8.1" ||episodeone === "Flow1.9.1"||episodeone === "Flow1.9"||episodeone === "Flow1.10") {
      setlistchat([
        {
          name: "Krista ",
          subject: "The meeting has...",
          clickable: true,
          episodeone: "voicemail1.8",
        },
        {
          name: "Mateo",
          subject: "Karoake tonight?",
          clickable: false,
          episodeone: "",
        },
        {
          name: "Timothee HR",
          subject: "Prepare for open...",
          episodeone: "",
          clickable: false,
        },
        {
          name: "Mom",
          subject: "did i do it right?",
          clickable: false,
          episodeone: "",
        },
        {
          name: "Akari",
          subject: "Crescent Lake ",
          clickable: false,
          episodeone: "",
        },
        {
          name: "Lakin",
          subject: "NYE!",
          clickable: false,
          episodeone: "",
        },
        {
          name: "Sylvie",
          subject: "resend code",
          episodeone: "",
          clickable: false,
        },
      ]);
    }
  }, []);




  useEffect(() => {
    if (episodeone == "Flow1.10.1"||episodeone == "Flow1.12") {
      setlistchat([
        {
          name: "Timothee HR",
          subject: "Where are you?",
          clickable: true,
          episodeone: "Flow1.10.1",
        },
        {
          name: "Krista ",
          subject: "The meeting has...",
          clickable: true,
          episodeone: "",
        },
        {
          name: "Mateo",
          subject: "Karoake tonight?",
          clickable: false,
          episodeone: "",
        },
        {
          name: "Timothee HR",
          subject: "Prepare for open...",
          episodeone: "",
          clickable: false,
        },
        {
          name: "Mom",
          subject: "did i do it right?",
          clickable: false,
          episodeone: "",
        },
        {
          name: "Akari",
          subject: "Crescent Lake ",
          clickable: false,
          episodeone: "",
        },
        {
          name: "Lakin",
          subject: "NYE!",
          clickable: false,
          episodeone: "",
        },
        {
          name: "Sylvie",
          subject: "resend code",
          episodeone: "",
          clickable: false,
        },
      ]);
    }
  }, []);

  return (
    <div id="pda-chat-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header name="Text" />

          {open ? (
            <ChatReply
              setOpen={setOpen}
              setEpisodeOne={setEpisodeOne}
              episodeone={episodeone}
            />
          ) : (
            <div className="container-message">
              {listchat.map((listchat, index) => (
                <div
                  type="button"
                  onClick={
                    listchat.clickable
                      ? OpenMessage
                      : null
                  }
                >
                  <div className="container-message-list">
                    <BaseChat
                      person={listchat.name}
                      chat={listchat.subject}
                      episodeone={episodeone}
                      listchat={listchat}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {hide ? (
            <div className="btn-delete-container d-flex justify-content-end">
              <div className="btn-delete d-flex justify-content-center align-items-center">
                Delete
              </div>
            </div>
          ) : null}
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
