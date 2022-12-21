import "./Header.scss";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../modules/db";


export default function Header() {
  
  const pdaHeaderStatic = useLiveQuery(
    () => db.assets.where('title').equalsIgnoreCase('pda-device-header').toArray(),
  );
  return (
    // <div id="pda-header">
    //   <div className="row-3" style={pdaHeaderStatic && pdaHeaderStatic.length !== 0 ? {backgroundImage: `url(${URL.createObjectURL(pdaHeaderStatic[0].blob)})`} : null}></div>
    // </div>
    <div id="pda-header">
      <div className="row-3"></div>
    </div>
  );
}
