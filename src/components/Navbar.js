import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dataLogged = JSON.parse(localStorage.getItem("loggedIn"));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink to={"/"} className="nav-link">
              Studenci
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/addStudent"}>
              Dodaj studenta
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/groups"}>
              Grupy
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addGroup">
              Dodaj grupę
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Zarejestruj
            </NavLink>
          </li>
          <li className="nav-item">
            {dataLogged !== null ? (
              <NavLink className="nav-link" to="/login">
                Wyloguj
              </NavLink>
            ) : (
              <NavLink className="nav-link" to="/login">
                Zaloguj
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
