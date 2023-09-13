import React from "react";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container">
        <h1 class="logo">Who Am I</h1>
        <ul class="nav-items">
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/favperson">
              FavPerson
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/favcities">
              FavCities
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/favtourists">
              FavTourSpots
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
