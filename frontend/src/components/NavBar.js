import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded nav-background" >
        <div className="collapse navbar-collapse nav-text">
          <ul className="navbar-nav pull-left">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">&nbsp;</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Sort By</a>
            </li>
          </ul>
          <span className="nav-header">
            On My 2018 Reading List
          </span>
        </div>
      </nav>
    )
  }
}
