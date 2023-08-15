import React from "react";
import "./Navtab.css";

function Navtab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <a className="navtab__link" href="#aboutProject">О проекте</a>
        <a className="navtab__link" href="#technologies">Технологии</a>
        <a className="navtab__link" href="#student">Студент</a>
      </ul>
    </nav>
  );
}

export default Navtab;
