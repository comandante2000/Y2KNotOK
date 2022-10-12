import ButtonCounter from "../../components/ButtonCounter"
import codevidiaLogo from '../../../assets/codevidia-logo.png'

export default function Layout(){
    return(
    <div className="d-flex flex-column justify-content-center align-items-center">
      <a href="https://codevidia.com m-2" target="_blank">
        <img src={codevidiaLogo} className="logo" alt="Codevidia logo" />
      </a>
      <h1 className="m-2">Y2KnotOK Project</h1>
      <ButtonCounter />
    </div>
    )
}