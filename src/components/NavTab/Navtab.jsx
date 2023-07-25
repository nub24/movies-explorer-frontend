import React from "react";
import "./Navtab.css";

function Navtab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item">
          <a className="navtab__link">О проекте</a>
        </li>
        <li className="navtab__list-item">
          <a className="navtab__link">Технологии</a>
        </li>
        <li className="navtab__list-item">
          <a className="navtab__link">Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navtab;
