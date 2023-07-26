import React from "react";
import "./Navtab.css";
import { Link } from "react-router-dom";

function Navtab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item">
          <a className="navtab__link" href="#aboutProject">О проекте</a>
        </li>
        <li className="navtab__list-item">
          <a className="navtab__link" href="#technologies">Технологии</a>
        </li>
        <li className="navtab__list-item">
          <a className="navtab__link" href="#student">Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navtab;
