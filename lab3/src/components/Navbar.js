import React from "react";

const Navbar = () => {
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
            <a className="nav-link" href="/">
              Studenci
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addStudent">
              Dodaj studenta
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/groups">
              Grupy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addGroup">
              Dodaj grupę
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;