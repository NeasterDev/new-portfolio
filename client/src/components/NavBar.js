import React from "react";

export class NavBar extends React.Component {
  render() {
    return (
      <div id="nav-container">
        <nav >
          <div id="nav-title">Nicholas Easter</div>
          <ul>
            <li>
              <a href="#about">
                <button className="nav-link">About</button>
              </a>
            </li>
            <li>
              <a href="#projects">
                <button className="nav-link">Projects</button>
              </a>
            </li>
            <li>
              <a href="#contact">
                <button className="nav-link">Contact</button>
              </a>
            </li>
            <li>
              <a href="#resume">
                <button className="nav-link">Resume</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
