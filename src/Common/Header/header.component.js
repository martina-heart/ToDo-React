import { Link } from "react-router-dom";
import "./header.component.css";

const Header = () => {
  return (
    <>
      <header className="header-css">
        <h1>My App</h1>
        <ul className="menu-css">
          <li className="links">
            <Link to="/home">Home</Link>
          </li>
          <li className="links">
            <Link to="/todos">Todos</Link>
          </li>
          <li className="links">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="links">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
