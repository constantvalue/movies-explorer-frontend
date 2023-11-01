import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer__section">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__date">© 2020</p>
        <nav className="footer__navigation">
          <a className="footer__link" href="link">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="link">
            Github
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
