import "./Chat.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import BaseChat from "./pages/BaseChat/BaseChat";
import BaseChatUnred from "./pages/BaseChatUnred/BaseChatUnred";
import ChatInfo from "./pages/BaseChatInfo/ChatInfo";
import ChatReply from "./pages/BaseChatInfo/BaseReply";
import { useState } from "react";
export default function ChatPage({accessmail,setAccesmail}) {



  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(true);
  const OpenMessage = () => {
    setOpen(true);
    setHide(false);
    if (accessmail == "voicemail1.8") {
      setAccesmail("voicemail1.8.1");
    }
  };
  return (
    <div id="pda-chat-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header name="Text" />
      
         {open ? (
                <ChatReply  setOpen={setOpen} setAccesmail={setAccesmail} accessmail={accessmail}/>
              ) : (
                <div type="button" onClick={accessmail =="notallowed "||accessmail =="allow" ||accessmail =="allowed"||accessmail =="mailpop"||accessmail =="voicemail1.7 "?null:OpenMessage} >
                  <div className="container-message">
                    <BaseChat person={accessmail=="Flow1.10.1"?"Timothee":"Krista"} chat={accessmail=="Flow1.10.1"?"Waiting on your":"Where are you n.."} accessmail={accessmail}/>
                    <BaseChatUnred person={accessmail=="Flow1.10.1"?"Krista":"Timothee"} chat="What day is tras" />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                  </div>
                </div>
              )}
          {hide ?
              <div className="btn-delete-container d-flex justify-content-end">
                <div className="btn-delete d-flex justify-content-center align-items-center">
                  Delete
                </div>
              </div> : null
          }
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
