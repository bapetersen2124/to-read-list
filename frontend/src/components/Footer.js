import React, { Component } from 'react';
import '../App.css';
import { Navbar } from 'react-bootstrap';
import { Form } from './SignUpForm.js';
import { SocialPop } from './SocialPopover.js';

export class Footer extends Component {
  render() {
    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded nav-background footer-height" >
        <div className="collapse navbar-collapse nav-text">
          <ul className="navbar-nav pull-left">
            <li className="nav-item active">
              <a className="nav-link footer-text" href="mailto: bapetersen2124@gmail.com">Contact Us</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">&nbsp;</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link footer-text" href="#">
                Follow Us
                < SocialPop />
              </a>
            </li>
            <li className="footer-header">
              <a>Join our email list:</a>
            </li>
            <li className="form-input">
              <span>
                < Form />
              </span>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}
