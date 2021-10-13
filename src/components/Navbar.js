import React from "react";
import notifImage from "../images/notification-btn.svg";
import helpImage from "../images/help-button.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Certify <span className="loyal-txt">Loyalty</span>{" "}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <span className="nav-link nav-brand-dorothy">Dorothy Copland</span>
          </li>
          <li className="nav-item">
            <a className="nav-link dropleft">
              <button
                className="btn nav-d-link"
                href="#"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="nav-d-letter">D</span>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
                <hr className="m-0" />
                <a class="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={helpImage} alt="" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={notifImage} alt="" />
              <span class="badge badge-danger navbar-badge">0</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
