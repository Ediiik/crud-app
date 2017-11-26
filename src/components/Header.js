import React from 'react';

/**
 * Page header
 */
const Header = () => (
  <header>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" >CRUD App</a>
        </div>
        <ul className="nav navbar-nav">
          <li><a href="/">Reload</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
