import History from "./History";
import "../styles/About.css";
import { MdEmail, MdPhone } from "react-icons/md";
import ContactItem from "./ContactItem";
import { Contact } from "../types";
import { config } from '../../config';

const contactData: Contact[] = [
  {
    type: "Email",
    value: config.email,
    icon: <MdEmail size={40} color="#1b4d3e" className="email-icon" />,
  },
  {
    type: "Phone",
    value: config.phone,
    icon: <MdPhone size={40} color="#1b4d3e" className="phone-icon" />,
  },
];

const About = () => {
  return (
    <div id="about" className="about-container">
      <p className="title">About Me</p>
      <div className="about-content">
        <div className="history-container">
          <History />
        </div>
        <div id="contact" className="contacts-container">
          <p className="contacts-title">Get in Touch!</p>
          <div>
            {contactData.length > 0 ? (
              contactData.map((item) => (
                <ContactItem key={item.type} item={item} />
              ))
            ) : (
              <p>No contact information available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
