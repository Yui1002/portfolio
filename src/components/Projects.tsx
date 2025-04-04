import Project from "./Project";
import projectData from "../projectData";

const Projects = () => {
    
    return (
        <div className="projects-container">
            <p className="title">Projects</p>
            {projectData.map((project, index) => (
                <Project project={project} key={index} />
            ))}
        </div>
    )
}

export default Projects;

