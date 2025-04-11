import "../styles/Experience.css";

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
      <div className="timeline-content">
        <h3 className="timeline-title">{experience.position}</h3>
        <h4 className="timeline-subtitle">{experience.companyName}</h4>
        <p className="timeline-date">{experience.period}</p>
      </div>
      <div className="timeline-details">
        {experience.description.map((d, index) => (
          <p key={index}>{d}</p>
        ))}
      </div>
    </div>
  );
};

export default Experience;
