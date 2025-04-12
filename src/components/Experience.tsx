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
        <img src={experience.companyLogo} alt={experience.companyName} />
      </div>
      <div>
        <div className="timeline-content">
            <p className="timeline-position">{experience.position}</p>
            <p className="timeline-name">{experience.companyName}</p>
            <p className="timeline-date">{experience.period}</p>
        </div>
        <div className="timeline-descriptions">
            {experience.description.map((d, index) => (
                <div className="timeline-description">
                    <FaCaretRight />
                    <p key={index}>{d}</p>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
