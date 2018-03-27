import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Logo</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


      <ul className="nav navbar-nav navbar-right">
        <li className="transition-hover"><i className="far fa-calendar-minus menuItem"></i>
          <p id="transition-hover-content">Today</p>
        </li>
        <li className="transition-hover"><i className="far fa-calendar-alt menuItem"></i>
          <p id="transition-hover-content">This Week</p>
        </li>
        <li className="transition-hover"><i className="fas fa-users menuItem"></i>
          <p id="transition-hover-content">Search</p>
        </li>
        <li className="transition-hover"><i className="fas fa-user menuItem"></i>
          <p id="transition-hover-content">My Profile</p>
        </li>
        <li className="transition-hover"><i className="fas fa-cogs menuItem"></i>
          <p id="transition-hover-content">Settings</p>
        </li>
        <li className="transition-hover"><i className="fas fa-dollar-sign menuItem"></i>
          <p id="transition-hover-content">Billing</p>
        </li>
        <li className="transition-hover"><i className="fas fa-question menuItem"></i>
          <p id="transition-hover-content">FAQ</p>
        </li>
        <li className="transition-hover"><i className="far fa-life-ring menuItem"></i>
          <p id="transition-hover-content">Support</p>
        </li>
        <li className="transition-hover"><i className="far fa-comments menuItem"></i>
          <p id="transition-hover-content">Contact Us</p>
        </li>
        <li className="transition-hover"><i className="fas fa-user-secret menuItem"></i>
          <p id="transition-hover-content">About Us</p>
        </li>
        <li className="transition-hover"><i className="fas fa-lock menuItem"></i>
          <p id="transition-hover-content">Log Out</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

export default Nav;
