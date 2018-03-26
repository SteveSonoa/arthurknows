import React from "react";

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
        <li className="transition-hover"><a href="#"><img src="img/256x256.png" width="50px" className="menuItem img img-responsive" /></a>
          <p id="transition-hover-content">Today</p>
      </li>
        <li className="transition-hover"><a href="#"><img src="img/256x256.png" width="50px" className="menuItem img img-responsive" /></a>
          <p id="transition-hover-content">This Week</p>
        </li>
        <li className="transition-hover"><a href="#"><img src="img/256x256.png" width="50px" className="menuItem img img-responsive" /></a>
          <p id="transition-hover-content">Settings</p>
        </li>
        <li className="transition-hover"><a href="#"><img src="img/256x256.png" width="50px" className="menuItem img img-responsive" /></a>
          <p id="transition-hover-content">Profile</p>
        </li>
        <li className="transition-hover"><a href="#"><img src="img/256x256.png" width="50px" className="menuItem img img-responsive" /></a>
          <p id="transition-hover-content">Search</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

export default Nav;
