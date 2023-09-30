import logoBlack from "./../assets/images/logo-black.png";
import "./Navbar.css";

const menuItems = ["service", "features", "pricing", "about us"];

const Navbar = function () {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          src={logoBlack}
          alt="Atom Bank logo"
          className="navbar__logo-img"
        />
      </div>
      <ul className="navbar__items">
        {menuItems.map((item) => (
          <NavItem menuItem={item} />
        ))}
      </ul>
      <div className="navbar__btns">
        <span className="navbar__btn">
          <a href="#">Log In</a>
        </span>
        <span className="navbar__btn">
          <a href="#">Register</a>
        </span>
      </div>
    </nav>
  );
};

const NavItem = function ({ menuItem }) {
  return <li className="navbar__item">{menuItem}</li>;
};
export default Navbar;
