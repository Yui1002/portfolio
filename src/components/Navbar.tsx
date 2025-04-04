import "../styles/Navbar.css";

const Navbar = () => {
  const navbarTitles = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <div className="navbar-container">
      {navbarTitles.map((title: string, index: number) => (
        <div className="navbar-sub-container" key={index}>
          <p className="navbar-text">{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
