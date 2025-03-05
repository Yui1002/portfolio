import '../styles/Headline.css'

const Headline = () => {
    return (
        <div className="headline-container">
            <div className="headline-text">
                <h1>Hello!</h1>
                <h1>I'm Yui.</h1>
                <h2>A Software Engineer Based in San Francisco</h2>
            </div>
            <img className="headline-image" src={require("../images/myself.jpg")}/>
        </div>
    )
}

export default Headline;