import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about" id="aboutProject">
      <h2 className="about__title">О проекте</h2>
      <div className="about__text-wrapper">
        <div className="about__block">
          <h3 className="about__block-title">Дипломный проект включал 5 этапов</h3>
          <p className="about__block-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__block">
          <p className="about__block-title">На выполнение диплома ушло 5 недель</p>
          <p className="about__block-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about__time">
          <p className="about__time-element">1 неделя</p>
          <p className="about__time-element">4 недели</p>
          <p className="about__time-element">Back-end</p>
          <p className="about__time-element">Front-end</p>
        </div>
    </section>
  );
}

export default AboutProject;
