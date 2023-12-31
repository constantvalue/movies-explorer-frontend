import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__links-item">
          <Link
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            to={"https://github.com/constantvalue/how-to-learn"}
          >
            Статичный сайт<span className="portfolio__arrow">↗</span>
          </Link>
        </li>
        <li className="portfolio__links-item">
          <Link
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            to={"https://github.com/constantvalue/russian-travel"}
          >
            Адаптивный сайт<span className="portfolio__arrow">↗</span>
          </Link>
        </li>

        <li className="portfolio__links-item">
          <Link
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            to={"https://github.com/constantvalue/react-mesto-api-full-gha"}
          >
            Одностраничное приложение<span className="portfolio__arrow">↗</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
