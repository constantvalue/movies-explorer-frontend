import React from "react";
import "./Header.css";
import logo from "../../images/logo_header.svg";
import accountLogo from "../../images/icon__COLOR_icon-main.svg";
function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <nav className="header__navigation">
          <img className="header__logo" src={logo} alt="Лого" />
          <ul className="header__navigation-container">
            <li className="header__link">Фильмы</li>
            <li className="header__link">Сохранённые фильмы</li>
          </ul>
        </nav>
        <button className="header__account-button">
          <a className="header__account-link">Аккаунт</a>

          <div className="header__account-logo"  />
        </button>
      </div>
    </section>
  );
}

export default Header;
