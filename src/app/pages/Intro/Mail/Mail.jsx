import "./Mail.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import MailBase from "./pages/BaseMail/BaseMail";
import MailBaseUnred from "./pages/BaseMailUnred/BaseMailUnred";
import MailReply from "./pages/BaseMailReply/MailReply";
import { useState, useEffect } from "react";
import PopUps from "./pages/Popups/Popups";
export default function MailPage({ episodeone, setEpisodeOne,dtime }) {
  const [openMail, setOpenMail] = useState(false);
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(true);

  const [openvideo, setOpenvideo] = useState(false);
  const [listmail, setListMail] = useState([
    {
      name: "hrtimothee@redwest.com",
      subject: "Subject for Y2KNOTOK",
      episodeone: "allowed",
      clickable: false,
      date: "12/30",
    },
    {
      name: "shirleyb5678@AOL.com",
      subject: "call me",
      episodeone: "",
      clickable: false,
      date: "12/16",
    },
    {
      name: "krista.trip@redwestco.com",
      subject: "12/17/1999",
      episodeone: "",
      clickable: false,
      date: "12/26",
    },
    {
      name: "shirleyb5678@AOL.com",
      subject: "VLA",
      episodeone: "",
      clickable: false,
      date: "12/26",
    },
    {
      name: "mateo.torres@redwestco.com",
      subject: "Finn",
      episodeone: "",
      clickable: false,
      date: "12/25",
    },
    {
      name: "shirleyb5678@AOL.com",
      subject: "hello?",
      episodeone: "",
      clickable: false,
      date: "12/24",
    },
    {
      name: "shirleyb5678@AOL.com",
      subject: "I need gift ideas",
      episodeone: "",
      clickable: false,
      date: "12/23",
    },
    {
      name: "krista.trip@redwestco.com",
      subject: "End of Days tonight?",
      episodeone: "",
      clickable: false,
      date: "12/23",
    },
    {
      name: "finn.walsh@redwestco.com",
      subject: "end of days tonight",
      episodeone: "",
      clickable: false,
      date: "12/23",
    },
    {
      name: "finn.walsh@redwestco.com",
      subject: "<no subject>",
      episodeone: "",
      clickable: false,
      date: "12/22",
    },
    {
      name: "krista.trip@redwestco.com",
      subject: "Y2K jokes",
      episodeone: "",
      clickable: false,
      date: "12/21",
    },
    {
      name: "finn.walsh@redwestco.com",
      subject: "rw control center closed 12/24 to 1/3",
      episodeone: "",
      clickable: false,
      date: "12/21",
    },
    {
      name: "krista.trip@redwestco.com",
      subject: "bars in Portland",
      episodeone: "",
      clickable: false,
      date: "12/21",
    },
    {
      name: "shirleyb5678@AOL.com",
      subject: "Brian",
      episodeone: "",
      clickable: false,
      date: "12/20",
    },

    {
      name: "shirleyb5678@AOL.com",
      subject: "Very Large Array trip",
      episodeone: "",
      clickable: false,
      date: "12/19",
    },
    {
      name: "krista.trip@redwestco.com",
      subject: "LiveJournal",
      episodeone: "",
      clickable: false,
      date: "12/19",
    },
    {
      name: "mateo.torres@redwestco.com",
      subject: "Vacation dates",
      episodeone: "",
      clickable: false,
      date: "12/19",
    },
    {
      name: "shirleyb5678@AOL.com",
      subject: "Christmas dinner",
      episodeone: "",
      clickable: false,
      date: "12/18",
    },
    {
      name: "finn.walsh@redwestco.com",
      subject: "malin fix",
      episodeone: "",
      clickable: false,
      date: "12/18",
    },
    {
      name: "mateo.torres@redwestco.com",
      subject: "1999 party idea",
      episodeone: "",
      clickable: false,
      date: "12/18",
    },

    {
      name: "krista.trip@redwestco.com",
      subject: "<no subject>",
      episodeone: "",
      clickable: false,
      date: "12/17",
    },
    {
      name: "finn.walsh@redwestco.com",
      subject: "nye?",
      episodeone: "",
      clickable: false,
      date: "12/17",
    },
    {
      name: "krista.trip@redwestco.com",
      subject: "<no subject>",
      episodeone: "",
      clickable: false,
      date: "12/16",
    },
    {
      name: "hr100@redwest.com",
      subject: "Happy Holidays",
      episodeone: "",
      clickable: false,
      date: "12/16",
    },
  ]);

  const OpenMessage = () => {
    setOpen(true);
    setHide(false);
   
  
    // if (episodeone == "allowed") {

    //   setEpisodeOne("Flow1.3");
    // }
  };

  useEffect(() => {
    if (episodeone !== "notallowed" || episodeone !== "allow") {
      setListMail([
        {
          name: "hrtimothee@redwest.com",
          subject: "Subject for Y2KNOTOK",
          episodeone: "allowed",
          clickable: true,
          date: "12/30",
        },
        {
          name: "shirleyb5678@AOL.com",
          subject: "call me",
          episodeone: "",
          clickable: false,
          date: "12/16",
        },
        {
          name: "krista.trip@redwestco.com",
          subject: "12/17/1999",
          episodeone: "",
          clickable: false,
          date: "12/26",
        },
        {
          name: "shirleyb5678@AOL.com",
          subject: "VLA",
          episodeone: "",
          clickable: false,
          date: "12/26",
        },
        {
          name: "mateo.torres@redwestco.com",
          subject: "Finn",
          episodeone: "",
          clickable: false,
          date: "12/25",
        },
        {
          name: "shirleyb5678@AOL.com",
          subject: "hello?",
          episodeone: "",
          clickable: false,
          date: "12/24",
        },
        {
          name: "shirleyb5678@AOL.com",
          subject: "I need gift ideas",
          episodeone: "",
          clickable: false,
          date: "12/23",
        },
        {
          name: "krista.trip@redwestco.com",
          subject: "End of Days tonight?",
          episodeone: "",
          clickable: false,
          date: "12/23",
        },
        {
          name: "finn.walsh@redwestco.com",
          subject: "end of days tonight",
          episodeone: "",
          clickable: false,
          date: "12/23",
        },
        {
          name: "finn.walsh@redwestco.com",
          subject: "<no subject>",
          episodeone: "",
          clickable: false,
          date: "12/22",
        },
        {
          name: "krista.trip@redwestco.com",
          subject: "Y2K jokes",
          episodeone: "",
          clickable: false,
          date: "12/21",
        },
        {
          name: "finn.walsh@redwestco.com",
          subject: "rw control center closed 12/24 to 1/3",
          episodeone: "",
          clickable: false,
          date: "12/21",
        },
        {
          name: "krista.trip@redwestco.com",
          subject: "bars in Portland",
          episodeone: "",
          clickable: false,
          date: "12/21",
        },
        {
          name: "shirleyb5678@AOL.com",
          subject: "Brian",
          episodeone: "",
          clickable: false,
          date: "12/20",
        },

        {
          name: "shirleyb5678@AOL.com",
          subject: "Very Large Array trip",
          episodeone: "",
          clickable: false,
          date: "12/19",
        },
        {
          name: "krista.trip@redwestco.com",
          subject: "LiveJournal",
          episodeone: "",
          clickable: false,
          date: "12/19",
        },
        {
          name: "mateo.torres@redwestco.com",
          subject: "Vacation dates",
          episodeone: "",
          clickable: false,
          date: "12/19",
        },
        {
          name: "shirleyb5678@AOL.com",
          subject: "Christmas dinner",
          episodeone: "",
          clickable: false,
          date: "12/18",
        },
        {
          name: "finn.walsh@redwestco.com",
          subject: "malin fix",
          episodeone: "",
          clickable: false,
          date: "12/18",
        },
        {
          name: "mateo.torres@redwestco.com",
          subject: "1999 party idea",
          episodeone: "",
          clickable: false,
          date: "12/18",
        },

        {
          name: "krista.trip@redwestco.com",
          subject: "<no subject>",
          episodeone: "",
          clickable: false,
          date: "12/17",
        },
        {
          name: "finn.walsh@redwestco.com",
          subject: "nye?",
          episodeone: "",
          clickable: false,
          date: "12/17",
        },
        {
          name: "krista.trip@redwestco.com",
          subject: "<no subject>",
          episodeone: "",
          clickable: false,
          date: "12/16",
        },
        {
          name: "hr100@redwest.com",
          subject: "Happy Holidays",
          episodeone: "",
          clickable: false,
          date: "12/16",
        },
      ]);
    }
  }, [episodeone]);

  return (
    <div id="pda-mail-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>

        <div
          className={`inner-row-center ${
            openvideo ? "voiceplay" : "unvoiceplay"
          }`}
        >
          <div>
            <Time openMail={openMail} time={dtime}/>
            <Header name="Mail" openMail={openMail} />
            <div className="mail-box-container">
              {open ? (
                <MailReply
                  setOpenMail={setOpenMail}
                  name={listmail.name}
                  setOpenvideo={setOpenvideo}
                  setOpen={setOpen}
                />
              ) : (
                <div className="mail-container">
                  <div className="mail-child-container">
                    {listmail.map((listmail, index) => (
                        <div key={index} className="">
                          <div className="mail-border"
                              type="button"
                              onClick={listmail.clickable ? OpenMessage : null}
                          >
                            <MailBase
                                name={listmail.name}
                                episodeone={episodeone}
                                subjects={listmail.subject}
                                listmail={listmail}
                                date={listmail.date}
                            />
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              )}
              {hide ? (
                <div className="btn-delete-container d-flex justify-content-end">
                  <div className="btn-delete d-flex justify-content-center align-items-center">
                    Delete
                  </div>
                </div>
              ) : null}
            </div>

            {openvideo ? (
              <PopUps
                video="https://images.stinkyfruit.com/Finn.mp4"
                setOpenvideo={setOpenvideo}
                setEpisodeOne={setEpisodeOne}
                episodeone={episodeone}
                setOpenMail={setOpenMail}
              />
            ) : null}
          </div>
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
