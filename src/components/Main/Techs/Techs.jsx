import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs__section">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <p className="techs__count">7 технологий</p>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="tech__name">HTML</li>
          <li className="tech__name">CSS</li>
          <li className="tech__name">JS</li>
          <li className="tech__name">React</li>
          <li className="tech__name">Git</li>
          <li className="tech__name">Express.js</li>
          <li className="tech__name">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
