import React from "react";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container">
        <h1 class="logo">WT</h1>
        <ul class="nav-items">
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/about">
              About
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
