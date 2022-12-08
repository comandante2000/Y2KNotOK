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
        <div className="base-chat-reply-container">
            <div className="chat-info-container">
                <ChatInfo person="Timothee" chat="Waiting on your reply, J. WILL YOU HELP ME?" />
                <ChatInfo person="Me" chat="NO" />
                <ChatInfo person="John" chat="HR Timothee left a few messages at like 2 in the morning. Dude asked for my"/>
            </div>
            <div className="d-flex justify-content-center txt-area-container mt-3">
                {open ?
                    (<div className="d-flex justify-content-center txt-area">
                            <textarea className="txt-area-bg" type="text" rows="5"></textarea>
                        </div>
                    ) : null}
            </div>
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
    </div>
  );
}
