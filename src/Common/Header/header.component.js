import { NavLink } from "react-router-dom";
import "./header.component.css";

const Header = () => {
  return (
    <>
      <header className="header-css">
        <h1>My App</h1>
        <ul className="menu-css">
          <li className="links">
            <NavLink to="/home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="links">
            <NavLink to="/todos" activeClassName="active">
              Todos
            </NavLink>
          </li>
          <li className="links">
            <NavLink to="/about-us" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="links">
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
