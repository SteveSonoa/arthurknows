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
      <a id="navbar-hover" className="navbar-brand" href="#">Logo</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


      <ul className="nav navbar-nav navbar-right">
        <li className="navTransition-hover"><i className="far fa-calendar-minus navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">Today</p>
        </li>
        <li className="navTransition-hover"><i className="far fa-calendar-alt navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">This Week</p>
        </li>
        <li className="navTransition-hover"><i className="fas fa-users navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">Search</p>
        </li>
        <li className="navTransition-hover"><i className="fas fa-user navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">My Profile</p>
        </li>
        <li className="navTransition-hover"><i className="fas fa-cogs navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">Settings</p>
        </li>
        <li className="navTransition-hover"><i className="fas fa-dollar-sign navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">Billing</p>
        </li>
        <li className="navTransition-hover"><i className="fas fa-question navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">FAQ</p>
        </li>
        <li className="navTransition-hover"><i className="far fa-life-ring navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">Support</p>
        </li>
        <li className="navTransition-hover"><i className="far fa-comments navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">Contact Us</p>
        </li>
        <li className="navTransition-hover"><i className="fas fa-user-secret navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">About Us</p>
        </li>
        <li className="navTransition-hover"><i className="fas fa-lock navMenuItem navi"></i>
          <p id="navTransition-hover-content" class="navp">Log Out</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

export default Nav;
