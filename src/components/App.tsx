import Headline from "./Headline";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Tools from "./Tools";
import Experiences from "./Experiences";
import About from "./About";

const App = () => {

    return (
        <div>
            <Navbar />
            <Headline />
            <Tools />
            <Projects />
            <Experiences />
            <About />
        </div>

    )
}

export default App;