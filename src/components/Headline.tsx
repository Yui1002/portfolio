import '../styles/Headline.css'

const Headline = () => {
    return (
        <div id='home' className="headline-container">
            <div className="headline-title">
                <h1>Hello!</h1>
                <h1>I'm Yui.</h1>
                <h2>A Software Engineer Based in San Francisco</h2>
            </div>
            <picture>
                <source srcSet={require("../images/webp/myself.webp")} type="image/webp"/>
                <source srcSet={require("../images/fallback/myself.png")} type="image/png"/>
                <img className="headline-image" src={require("../images/fallback/myself.png")} loading='lazy'/>
            </picture>
        </div>
    )
}

export default Headline;