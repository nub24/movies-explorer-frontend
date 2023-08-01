import React from "react";
import "./Promo.css";
import Navtab from "../NavTab/Navtab";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <div className="promo__title-wrapper">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
        </div>
        <Navtab />
      </div>
    </section>
  );
}

export default Promo;
