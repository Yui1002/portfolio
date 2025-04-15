import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./Navbar"));
const Headline = lazy(() => import("./Headline"));
const Tools = lazy(() => import("./Tools"));
const Projects = lazy(() => import("./Projects"));
const Experiences = lazy(() => import("./Experiences"));
const About = lazy(() => import("./About"));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Headline />
            <Tools />
            <Projects />
            <Experiences />
            <About />
        </Suspense>
    )
}

export default App;