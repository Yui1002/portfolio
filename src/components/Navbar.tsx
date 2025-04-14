import "../styles/Navbar.css";

const Navbar = () => {
  const navbarTitles = ["Home", "About", "Projects", "Experience", "Contact"];

  const handleScroll = (title: string) => {
    const section = document.getElementById(title.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="navbar-container">
      {navbarTitles.map((title: string, index: number) => (
        <div
          className="navbar-sub-container"
          key={index}
          onClick={() => handleScroll(title)}
        >
          <p className="navbar-text">{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
