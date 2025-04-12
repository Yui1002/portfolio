import "../styles/Experience.css";
import { FaCaretRight } from "react-icons/fa";

interface ExperienceProps {
  experience: {
    companyName: string;
    position: string;
    period: string;
    description: Array<string>;
    companyLogo: string;
    companyLink: string;
  };
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <a href={experience.companyLink} target="_blank" rel="noopener noreferrer">
          <img src={experience.companyLogo} alt={experience.companyName} />
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
