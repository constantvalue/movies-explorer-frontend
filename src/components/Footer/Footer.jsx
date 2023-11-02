import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__date">© 2020</p>
        <nav className="footer__navigation">
          <a className="footer__link" href="https://practicum.yandex.ru/">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="https://github.com/">
            Github
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
