import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <ul class="nav nav-pills">
            <li class="nav-item dropdown">
              <p
                class="nav-link dropdown"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                <span className="material-icons text-light mt-4">menu</span>
              </p>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="Profile"> <span className="material-icons text-dark">account_circle</span>User Profile</a>
                </li>
                <li>
                  <h1 class="dropdown-divider"></h1>
                </li>
                <li>
                  <a class="dropdown-item" href="SignIn">
                  <span className="material-icons text-dark">login</span> Log In
                  </a>
                </li>
                <li>
                  <h1 class="dropdown-divider"></h1>
                </li>
                <li>
                  <a class="dropdown-item" href="Viewrides">
                  <span className="material-icons text-dark">directions_car</span> Your Rides
                  </a>
                </li>
                <li>
                  <h1 class="dropdown-divider"></h1>
                </li>
                <li>
                  <a class="dropdown-item" href="Payment">
                  <span className="material-icons text-dark">account_balance</span> Payments
                  </a>
                </li>
                <li>
                  <h1 class="dropdown-divider"></h1>
                </li>
                <li>
                  <a class="dropdown-item" href="Help">
                  <span className="material-icons text-dark">contact_support</span> Help & Support
                  </a>
                </li>
                <li>
                  <h1 class="dropdown-divider"></h1>
                </li>
                <li>
                  <a class="dropdown-item" href="Logout">
                  <span className="material-icons text-dark">logout</span> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <NavLink className="navbar-brand" to="/">
            <a class="navbar-brand" href="#">
              {" "}
              <img
                src="logo-removebg-preview (1).png"
                className="d-block mt-4"
                width="80px"
                height="60px"
                alt="..."
              />
            </a>
          </NavLink>
          <div className="text-warning">
            <h3>RENT & RUN</h3>
          </div>
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
              <li className="nav-item">
                <NavLink
                  className="nav-link text-warning"
                  exact={true}
                  activeClassName="active"
                  to="/"
                >
                  <b>Home</b>
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-warning"
                  activeClassName="active"
                  to="/signin"
                >
                  <b>Sign In</b>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link text-warning"
                  activeClassName="active"
                  to="/signup"
                >
                  <b>Sign Up</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-warning"
                  activeClassName="active"
                  to="/Help"
                >
                  <b>Help & Support</b>
                </NavLink>
              </li>
             
             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar