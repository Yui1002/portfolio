import "../styles/Experience.css";
import { FaCaretRight } from "react-icons/fa";

interface ExperienceProps {
  experience: {
    companyName: string;
    position: string;
    period: string;
    description: Array<string>;
    companyLogo: string;
    fallback: string;
    companyLink: string;
  };
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <a href={experience.companyLink} target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={experience.companyLogo} type="image/webp"/>
            <source srcSet={experience.fallback} type="image/png"/>
            <img src={experience.fallback} alt={experience.companyName} loading="lazy"/>
          </picture>
        </a>
      </div>
      <div>
        <div className="timeline-content">
          <p className="timeline-position">{experience.position}</p>
          <a
            href={experience.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-name"
          >
            @{experience.companyName}
          </a>
          <p className="timeline-date">{experience.period}</p>
        </div>
        <div className="timeline-descriptions">
          {experience.description.map((d, index) => (
            <div className="timeline-description" key={index}>
              <FaCaretRight />
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
