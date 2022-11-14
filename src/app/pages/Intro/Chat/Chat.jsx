import "./Chat.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
export default function ChatPage() {
  return (
    <div id="pda-chat-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time />
          <Header name="Text" />
          <div>
            <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5 position-relative">
              <div className="red-icon "></div>
              <div className="chat-icon "></div>
              <div>
                <div className="d-flex">
                  <div className="person-name">
                    Finn 
                    </div>
                  <div className="position-absolute top-0 end-0 me-1">12/30</div>
                </div>
                <div>
                  <div className="person-chat">Where are you?</div>
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0  position-relative">
              <div className="red-icon "></div>
              <div className="chat-icon "></div>
              <div  >
                <div className="d-flex">
                  <div className="person-name">Marcia </div>
                  <div className="position-absolute top-0 end-0 me-1">12/30</div>
                </div>
                <div>
                  <div className="person-chat">The meeting has.</div>
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0  position-relative">
              <div className="unred-icon "></div>
              <div className="chat-icon "></div>
              <div>
                <div className="d-flex">
                  <div className="person-name">Tony</div>
                  <div className="position-absolute top-0 end-0 me-1">12/30</div>
                </div>
                <div>
                  <div className="person-chat">What day is tras..</div>
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0  position-relative">
              <div className="unred-icon "></div>
              <div className="chat-icon "></div>
              <div>
                <div className="d-flex ">
                  <div className="person-name">Jessica</div>
                  <div className="position-absolute top-0 end-0 me-1">12/30</div>
                </div>
                <div>
                  <div className="person-chat">What day is tras..</div>
                </div>
              </div>
            </div>

            

            <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5 position-relative">
              <div className="unred-icon "></div>
              <div className="chat-icon "></div>
              <div>
                <div className="d-flex">
                  <div className="person-name">Admin</div>
                  <div className="position-absolute top-0 end-0 me-1">12/30</div>
                </div>
                <div>
                  <div className="person-chat">Did you reset y..</div>
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5 position-relative">
              <div className="unred-icon "></div>
              <div className="chat-icon "></div>
              <div>
                <div className="d-flex">
                  <div className="person-name">Mike</div>
                  <div className="position-absolute top-0 end-0 me-1">12/30</div>
                </div>
                <div>
                  <div className="person-chat">Karaoke tonight?</div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
