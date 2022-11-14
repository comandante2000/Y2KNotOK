import "./Mail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
export default function MailPage() {
  return (
    <div id="pda-mail-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>

        <div className="inner-row-center">
          <div>
            <Time />
            <Header name="Mail" />
            <div>
            
              <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5" type = "button" >
                <div className="red-icon "></div>
                <div className="mail-icon"></div>
                <div>
                  <div className="d-flex justify-content-center ">
                    <div className="mail-name">admin@redwest.com</div>
                    <div className="ms-4">12/30</div>
                  </div>
                  <div>
                    <div className="subject">Subject Line</div>
                  </div>
                </div>
              </div>

              <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5 border-top-0">
                <div className="red-icon "></div>
                <div className="mail-icon"></div>
                <div>
                  <div className="d-flex justify-content-center ">
                    <div className="mail-name">admin@redwest.com</div>
                    <div className="ms-4">12/30</div>
                  </div>
                  <div>
                    <div className="subject">Subject Line</div>
                  </div>
                </div>
              </div>

              <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5 border-top-0">
                <div className="unred-icon "></div>
                <div className="mail-icon"></div>
                <div>
                  <div className="d-flex justify-content-center ">
                    <div className="mail-name">admin@redwest.com</div>
                    <div className="ms-4">12/30</div>
                  </div>
                  <div>
                    <div className="subject">Subject Line</div>
                  </div>
                </div>
              </div>

              <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5 border-top-0">
                <div className="unred-icon "></div>
                <div className="mail-icon"></div>
                <div>
                  <div className="d-flex justify-content-center ">
                    <div className="mail-name">admin@redwest.com</div>
                    <div className="ms-4">12/30</div>
                  </div>
                  <div>
                    <div className="subject">Subject Line</div>
                  </div>
                </div>
              </div>

              <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5 border-top-0">
                <div className="unred-icon "></div>
                <div className="mail-icon"></div>
                <div>
                  <div className="d-flex justify-content-center ">
                    <div className="mail-name">admin@redwest.com</div>
                    <div className="ms-4">12/30</div>
                  </div>
                  <div>
                    <div className="subject">Subject Line</div>
                  </div>
                </div>
              </div>

              <div className=" d-flex justify-content-evenly mx-1 me-3 border border-dark py-0 g-5 border-top-0">
                <div className="unred-icon "></div>
                <div className="mail-icon"></div>
                <div>
                  <div className="d-flex justify-content-center ">
                    <div className="mail-name">admin@redwest.com</div>
                    <div className="ms-4">12/30</div>
                  </div>
                  <div>
                    <div className="subject">Subject Line</div>
                  </div>
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
