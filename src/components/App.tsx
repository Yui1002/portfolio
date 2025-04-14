import Headline from "./Headline";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Tools from "./Tools";
import Experiences from "./Experiences";
import About from "./About";

const App = () => {
    return (
        <>
            <Navbar />
            <Headline />
            <Tools />
            <Projects />
            <Experiences />
            <About />
        </>
    )
}

export default App;