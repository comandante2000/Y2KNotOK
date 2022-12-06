import "./BaseReply.scss";
import ChatInfo from "./ChatInfo";
import { useState } from "react";
export default function ChatReply({ person, chat }) {
  // admin@redwest.com
    const [open, setOpen] = useState(false);

    const OpenReplay = () => {
        setOpen(true);
    };
    const OpenBack = () => {
        setOpen(false);
    };


    return (
    <div id="pda-base-chat-reply">
      <div>
        <ChatInfo person="John" chat="Where are you?" />
        <ChatInfo person="Me" chat="In the Cafeteria" />
        <ChatInfo
          person="John"
          chat="HR Timothee left a few messages at like 2 in the morning. Dude asked for my"
        />
      </div>
        {open ?
            (<div className="d-flex justify-content-center mt-3">
               <textarea className="txt-area-bg" type="text" rows="5" cols="60"></textarea>
            </div>
        ) : null}
      <div>
        <div className="d-flex justify-content-around mt-3">
          <div className="btn-back d-flex justify-content-center align-items-center px-3" type="button" onClick={OpenBack}>
            Back
          </div>
          <div className="btn-reply d-flex justify-content-center align-items-center px-3" type="button" onClick={OpenReplay}>
            Reply
          </div>
          <div className="btn-delete d-flex justify-content-center align-items-center px-3" type="button">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}
