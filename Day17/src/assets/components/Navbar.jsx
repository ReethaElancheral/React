
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <NavLink className="navbar-brand" to="/">Day17</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">Project1</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Project2</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">Project3</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Project4</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
