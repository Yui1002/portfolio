import "../styles/Experiences.css";
import experienceData from "../data/experienceData";
import Experience from "./Experience";

const Experiences = () => {
  return (
    <div className="experience-container">
      <p className="title">Work Experience</p>
      <div className="timeline">
        {experienceData.map((experience, index) => <Experience key={index} experience={experience}/>)}
      </div>
    </div>
  );
};

export default Experiences;
