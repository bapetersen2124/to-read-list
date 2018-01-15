import React, { Component } from 'react';
import '../styling/NavBar.sass';
import { Navbar } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return(
      <nav className="nav nav-background" >
        <div className="nav-text">
          <ul>
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
