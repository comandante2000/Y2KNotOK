import "./Chat.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import BaseChat from "./pages/BaseChat/BaseChat";
import BaseChatUnred from "./pages/BaseChatUnred/BaseChatUnred";
import ChatInfo from "./pages/BaseChatInfo/ChatInfo";
import ChatReply from "./pages/BaseChatInfo/BaseReply";
import { useState } from "react";
export default function ChatPage() {

  const [open, setOpen] = useState(false);

  const OpenMessage = () => {
    setOpen(true);
  };
  return (
    <div id="pda-chat-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header name="Text" />
      
         {open ? (
                <ChatReply />
              ) : (
                <div type="button" onClick={OpenMessage} >
                  <div className="container-message">
                    <BaseChat person="Finn" chat="Where are you n.."/>
                    <BaseChat person="Marcia" chat="The meeting has..." />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                    <BaseChatUnred person="Tony" chat="What day is tras.." />
                  </div>
                </div>
              )}

        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
