import "./BaseChat.scss";
export default function BaseChat({person,chat}) {
 
   
  // admin@redwest.com


  return (
    <div id="pda-base-chat">
      <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-2 g-5 position-relative">
              <div className="red-icon "></div>
              <div className="chat-icon "></div>
              <div>
                <div className="d-flex">
                  <div className="person-name">
                    {person}
                    </div>
                  <div className="position-absolute top-0 end-0 me-1">12/30</div>
                </div>
                <div>
                  <div className="person-chat">{chat}</div>
                </div>
              </div>
            </div>
    </div>
  );
}
