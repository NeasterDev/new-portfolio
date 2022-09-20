import React from "react";

export class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div id="nav-title">Nicholas Easter</div>
          <ul>
            <li>
              <a href="?">
                <button className="nav-link">About</button>
              </a>
            </li>
            <li>
              <a href="?">
                <button className="nav-link">Contact</button>
              </a>
            </li>
            <li>
              <a href="?">
                <button className="nav-link">Projects</button>
              </a>
            </li>
            <li>
              <a href="?">
                <button className="nav-link">Resume</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
