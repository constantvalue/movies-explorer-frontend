import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio__section">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          Статичный сайт<span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__link">
          Адаптивный сайт<span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__link">
          Одностраничное приложение<span className="portfolio__arrow">↗</span>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
