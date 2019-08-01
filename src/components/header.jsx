import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="menu-toggle" id="hamburger">
            <i className="fas fa-bars" />
          </div>
          <div className="overlay" />
          <div className="container">
            <nav>
              <h1 className="brand">
                  RISE<sup><span>UP</span></sup>SUMMIT
              </h1>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">crowd</a>
                </li>
                <li>
                  <a href="#">Summit'18</a>
                </li>
                <li>
                  <a href="#contactUS">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
