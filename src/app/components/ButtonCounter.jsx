import { Link } from "react-router-dom"

export default function ButtonCounter(){
    return(
    <Link to="/documentation">    
        <button className='btn btn-primary m-2'>
            Read Documentation
        </button>
    </Link>
    )
}