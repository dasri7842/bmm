import logo from "./../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-lg">
          <NavLink className="navbar-brand my-auto" to="/">
            <img src={logo} alt={"logo"}></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item my-auto">
                <NavLink className="nav-link" exact={true} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item my-auto">
                <NavLink className="nav-link" exact={true} to="/login">
                  <button className="btn btn-secondary">Login</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
