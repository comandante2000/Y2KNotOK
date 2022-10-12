import '../epilogue/Epilogue.scss'
import FirstSection from './components/firstSection/FirstSection'
import SecondSection from './components/secondSection/SecondSection'

export default function Epilogue(){
    return(
        <div id='epilogue-page' className="container-fluid d-flex justify-content-center align-items-center" style={{ border: '1px solid red'}}>
            <div className="device"></div>
        </div>
    )
}