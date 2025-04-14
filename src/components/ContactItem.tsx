import "../styles/ContactItem.css"
import { Contact } from "../types";

interface ContactItemProps {
    item: Contact;
}

const ContactItem = ({item}: ContactItemProps) => {
  return (
    <div className="contact-item">
        {item.icon}
        <div className="contact">
            <p className="contact-title">{item.type}</p>
            <p className="contact-value">{item.value}</p>
        </div>
    </div>
  );
};

export default ContactItem;
