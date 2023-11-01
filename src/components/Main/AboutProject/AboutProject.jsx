import React from "react";
import "./AboutProject.css";

function NavTab() {
  return (
    <section className="about__section">
      <div className="about__container">
        <h2 className="about__title">О проекте</h2>

        <div className="about__description">
          <div className="about__column">
            <h2 className="about__heading">
              Дипломный проект включал 5 этапов
            </h2>
            <p className="about__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__column">
            <h2 className="about__heading">
              На выполнение диплома ушло 5 недель
            </h2>
            <p className="about__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>


<div className="about__deadlines">
    <ul className="about__deadlines-grid">
        <li className="about__deadlines-week">1 неделя</li>
        <li className="about__deadlines-weeks">4 недели</li>
        <li className="about__deadlines-backend">Back-end</li>
        <li className="about__deadlines-frontend">Front-end</li>
    </ul>
</div>

      </div>
    </section>
  );
}

export default NavTab;
