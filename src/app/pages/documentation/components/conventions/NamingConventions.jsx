
export default function NamingConventions({namingConvention}){
    return(
        <div className={`mt-2 d-flex flex-column ${namingConvention ? 'fadeIn' : 'hidden'}`}>
        <h1 className='display-2 fw-bold'>Naming Conventions</h1>
        <h2>Naming Components:</h2>
        <p><span className="h4">PascalCase:</span> Eg. NamingConventions, DesignMethodology, MenuSlider</p>
        <div className="my-2 d-flex flex-column">
            <h2>Naming Functions inside Components</h2>
            <p><span className="h4">camelCase:</span> Eg. namingConvention, handleChange(), handleInput()</p>
        </div>
    </div>
    )
}