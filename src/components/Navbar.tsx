import "../styles/Navbar.css";

const Navbar = () => {
  const navbarTitles = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <div className="navbar-container">
      {navbarTitles.map((title: string) => (
        <div className="navbar-sub-container">
          <text className="navbar-text">{title}</text>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
