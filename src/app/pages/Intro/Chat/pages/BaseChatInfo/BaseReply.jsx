import "./ChatInfo.scss";
import ChatInfo from "./ChatInfo";
import { useState } from "react";
export default function ChatReply({ person, chat }) {
  // admin@redwest.com

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



      <div className="d-flex justify-content-center mt-3">
        <textarea className="txt-area-bg" type="text" rows="5" cols="60">
        </textarea>
        </div>

        <div>
          <div className="d-flex justify-content-around mt-3">
            <div
              className="d-flex justify-content-center border border-dark px-3"
              type="button"
            >
              Back
            </div>
            <div
              className="d-flex justify-content-center border border-dark px-3"
              type="button"
              onClick={""}
            >
              Replay
            </div>
            <div
              className="d-flex justify-content-center border border-dark px-3"
              type="button"
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    
  );
}
