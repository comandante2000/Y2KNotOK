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
            <Header />
            <div>
              <div className=" d-flex justify-content-evenly mx-1 border border-dark py-0">
                <div className="red-icon "></div>
                <div className="mail-icon"></div>
                <div className="d-flex align-items-start flex-column bd-highlight justify-content-center">
                  <div className="email-name mx-2 fs-5">admin@redwest.com</div>
                  <div className="email-subject mx-2 fs-5">Subject Line</div>
                </div>
              </div>
              <div className=" d-flex justify-content-evenly mx-1 border border-dark py-0">
                <div className="red-icon "></div>
                <div className="mail-icon"></div>
                <div className="d-flex align-items-start flex-column bd-highlight justify-content-center">
                  <div className="email-name mx-2 fs-5">admin@redwest.com</div>
                  <div className="email-subject mx-2 fs-5">Subject Line</div>
                </div>
              </div>
              <div className=" d-flex justify-content-evenly mx-1 border border-dark py-0">
                <div className="unred-icon "></div>
                <div className="mail-icon"></div>
                <div className="d-flex align-items-start flex-column bd-highlight justify-content-center">
                  <div className="email-name mx-2 fs-5">admin@redwest.com</div>
                  <div className="email-subject mx-2 fs-5">Subject Line</div>
                </div>
              </div>
              <div className=" d-flex justify-content-evenly mx-1 border border-dark py-0">
                <div className="unred-icon "></div>
                <div className="mail-icon"></div>
                <div className="d-flex align-items-start flex-column bd-highlight justify-content-center">
                  <div className="email-name mx-2 fs-5">admin@redwest.com</div>
                  <div className="email-subject mx-2 fs-5">Subject Line</div>
                </div>
              </div>
              <div className=" d-flex justify-content-evenly mx-1 border border-dark py-0">
                <div className="unred-icon "></div>
                <div className="mail-icon"></div>
                <div className="d-flex align-items-start flex-column bd-highlight justify-content-center">
                  <div className="email-name mx-2 fs-5">admin@redwest.com</div>
                  <div className="email-subject mx-2 fs-5">Subject Line</div>
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
