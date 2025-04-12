import History from "./History";
import '../styles/About.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
        <p className="title">About Me</p>
        <div className="about-content">
            <div className="history-container">
                <History />
            </div>
            <div className="contacts">
                <p>Get in Touch!</p>
                <div>
                    <p>Email</p>
                    <p>yuidayal@gmail.com</p>
                </div>
                <div>
                    <p>Phone</p>
                    <p>510-836-9377</p>
                </div>
                <div>
                    <p>Download CV</p>
                </div>
                <div className="social-media-icon">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={50} color="#1B4D3E" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={50} color="#1B4D3E" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
