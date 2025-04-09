import "../styles/Project.css";
import { FaGithub } from "react-icons/fa"; 
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
    project: {
        name: string,
        description: string,
        image: string,
        githubLink: string
    }
}

const Project = ({project}: ProjectProps) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.name} />
            </div>
            <div className="project-details">
                <h2 className="project-title">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <FaGithub size={20} className="github-icon"/>
                <FaExternalLinkAlt size={20} className="website-icon"/>
            </div>
        </div>
    )
}

export default Project;