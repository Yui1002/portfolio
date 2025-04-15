import "../styles/Project.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  project: {
    name: string;
    description: string;
    image: string;
    fallback: string;
    tools: Array<string>;
    githubLink: string;
    websiteLink: string;
  };
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="project-card">
        <div className="project-image">
          <picture>
            <source srcSet={project.image} type="image/webp"/>
            <source srcSet={project.fallback} type="image/png"/>
            <img src={project.fallback} alt={project.name} loading="lazy"/>
          </picture>
        </div>
        <div className="project-title">{project.name}</div>
        <div className="project-description">{project.description}</div>
        <div className="project-tools">
          {project.tools.map((tool, index) => (
            <p key={index} className="project-tool">{tool}</p>
          ))}
        </div>
        <div className="project-icon">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub size={50} color="#1B4D3E" />
            </a>
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={50} color="#1B4D3E" />
            </a>
        </div>
    </div>
  );
};

export default Project;