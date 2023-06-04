import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar(props) {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const [selected, setSelected] = useState(0);

  return (
    <ul className="nav-menu">
      <li className="nav-item">
        <Link
          to="/events"
          onClick={() => setSelected(1)}
          className={selected === 1 ? "nav-links-selected" : "nav-links"}
        >
          All Events
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contacts"
          onClick={() => setSelected(2)}
          className={selected === 2 ? "nav-links-selected" : "nav-links"}
        >
          Contacts
        </Link>
      </li>

      {/* <li className="nav-item">
        <Link
          to="/chat"
          onClick={() => setSelected(3)}
          className={selected === 3 ? "nav-links-selected" : "nav-links"}
        >
          Chat
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/users"
          className={selected === 4 ? "nav-links-selected" : "nav-links"}
          onClick={() => setSelected(4)}
        >
          Users
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/eventtypes"
          className={selected === 5 ? "nav-links-selected" : "nav-links"}
          onClick={() => setSelected(5)}
        >
          EventTypes
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/calendar"
          className={selected === 6 ? "nav-links-selected" : "nav-links"}
          onClick={() => setSelected(6)}
        >
          My Calendar
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/notifications"
          className={selected === 7 ? "nav-links-selected" : "nav-links"}
          onClick={() => setSelected(7)}
        >
          Notifications
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
