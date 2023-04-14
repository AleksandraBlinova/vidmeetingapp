import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar(props) {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li className="nav-item">
        <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
          Events
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contacts" className="nav-links">
          Contacts
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/chat" className="nav-links">
          Chat
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-links">
          Users
        </Link>
      </li>

      {/* <li className="nav-item">
        <Link to="/calls" className="nav-links" onClick={closeMobileMenu}>
          Calls
        </Link>
      </li> */}

      <li className="nav-item">
        <Link to="/calendar" className="nav-links">
          Calendar
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/notifications"
          className="nav-links"
          onClick={closeMobileMenu}
        >
          Notifications
        </Link>
      </li> */}
    </ul>
  );
}

export default Navbar;
