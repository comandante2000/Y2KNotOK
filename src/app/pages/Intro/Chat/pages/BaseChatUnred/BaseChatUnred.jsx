import "./BaseChatUnred.scss";
export default function BaseChatUnred({person,chat}) {


    // admin@redwest.com


    return (
        <div id="pda-base-chat-unred">
            <div className=" d-flex justify-content-evenly border border-dark py-0 g-5 position-relative base-chat-unread-container">
                <div className="icon-container d-flex align-items-center">
                    <div className="unred-icon "></div>
                    <div className="chat-icon "></div>
                </div>
                <div className="info-container me-3 m-auto">
                    <div className="d-flex w-100">
                        <div className="person-name w-50">
                            {person}
                        </div>
                        <div className="chat-date w-50 text-end">
                            12/30
                        </div>
                    </div>
                    <div>
                        <div className="person-chat">{chat}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
