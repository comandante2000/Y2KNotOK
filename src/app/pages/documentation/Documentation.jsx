import { useState } from 'react'
import './Documentation.scss'
import DesignMethodology from './components/methodology/DesignMethodology'
import NamingConventions from './components/conventions/NamingConventions';

export default function Documentation(){
    const [namingConvention, showNamingConvention] = useState(false);
    return(
    <div id="documentation-page" className='container-md' style={{ border: '1px solid red'}}>
        <DesignMethodology namingConvention={namingConvention} showNamingConvention={showNamingConvention}/>
        <NamingConventions namingConvention={namingConvention}/>
    </div>
    )
}