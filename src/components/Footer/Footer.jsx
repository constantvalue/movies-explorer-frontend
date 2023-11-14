import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__date">© 2020</p>
        <nav className="footer__navigation">
          <Link
            target="_blank"
            rel="noreferrer"
            className="footer__link"
            to={"https://practicum.yandex.ru/"}
          >
            Яндекс.Практикум
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            className="footer__link"
            to={"https://github.com/"}
          >
            Github
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
