import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__date">© 2020</p>
        <nav className="footer__navigation">
          <a
            target="_blank"
            rel="noreferrer"
            className="footer__link"
            href="https://practicum.yandex.ru/"
          >
            Яндекс.Практикум
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="footer__link"
            href="https://github.com/"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
