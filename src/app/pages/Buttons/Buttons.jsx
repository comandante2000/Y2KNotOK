import "./Buttons.scss";
import RadioButton from "./Radio/Radio";
import MailButton from "./Mail/Mail";
import PhoneButton from "./Phone/Phone";
import MessageButton from "./Message/Message";
import MapButton from "./Map/Map";

export default function Buttons() {
  // const [active1, setActive1] = useState(false);

  // const handleClick1 = () => {
  //   setActive1((prev) => !prev);
  // };

  return (
    <div id="pda-buttons">
      <div class=" row-1">
        <div className="buttns d-inline-flex">
          <li className="button-list d-flex justify-content-evenly mt-4%">
            <MailButton />
            <RadioButton />
            <PhoneButton />
            <MessageButton />
            <MapButton />
          </li>
        </div>
      </div>
    </div>
  );
}
