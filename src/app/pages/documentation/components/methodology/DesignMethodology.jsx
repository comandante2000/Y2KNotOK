
export default function DesignMethodology({namingConvention, showNamingConvention}){
    return(
        <div className="mt-2 d-flex flex-column">
            <h1 className='display-2 fw-bold'>Design Methodology 1</h1>
            <h2>Component-Centric Design</h2>
            <div className="">
                <button onClick={() => {showNamingConvention(true)}} className={namingConvention ? 'fadeOut' : 'btn btn-primary px-4'}>
                    Next
                </button>
            </div>
        </div>
    )
}