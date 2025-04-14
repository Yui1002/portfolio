import Project from "./Project";
import projectData from "../data/projectData";
import '../styles/Projects.css'

const Projects = () => {
    
    return (
        <div id="projects" className="projects-container">
            <p className="title">Projects</p>
            <div className="projects-sub-container">
                {projectData.map((project, index) => (
                    <Project project={project} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Projects;

