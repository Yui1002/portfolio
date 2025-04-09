import "../styles/Project.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  project: {
    name: string;
    description: string;
    image: string;
    tools: Array<string>;
    githubLink: string;
    websiteLink: string;
  };
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project-details">
        <h2 className="project-title">{project.name}</h2>
        <p className="project-description">{project.description}</p>
        <div className="project-tools">
          {project.tools.map((tool, index) => (
            <p key={index} className="project-tool">
              {tool}
            </p>
          ))}
        </div>
        <div className="project-icon">
          <FaGithub size={50} />
          <FaExternalLinkAlt size={50} />
        </div>
      </div>
    </div>
  );
};

export default Project;
