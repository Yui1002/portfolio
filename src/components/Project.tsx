import "../styles/Project.css";

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
                <a href={project.githubLink} target="_blank" rel="noopener" className="github-link">View on GitHub</a>
            </div>
        </div>
    )
}

export default Project;