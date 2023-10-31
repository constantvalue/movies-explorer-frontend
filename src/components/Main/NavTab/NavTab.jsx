import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navTab">
      <ul className="navTab__list">
        <li>
          <a href="#AboutProject" className="navTab__link">
            О проекте
          </a>
        </li>
        <li>
          <a href="#Techs" className="navTab__link">
            Технологии
          </a>
        </li>
        <li>
          <a href="#Portfolio" className="navTab__link">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavTab;
