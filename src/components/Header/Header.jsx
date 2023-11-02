import React from "react";
import "./Header.css";
import logo from "../../images/logo_header.svg";
function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <nav className="header__navigation">
          <img className="header__logo" src={logo} alt="Лого" />
          <ul className="header__navigation-container">
            <a href="/movies" className="header__link">Фильмы</a>
            <a href="/saved" className="header__link">Сохранённые фильмы</a>
          </ul>
        </nav>
        <button className="header__account-button">
          <a href="/profile" className="header__account-link">Аккаунт</a>

          <div className="header__account-logo" />
        </button>
        <button className="header__account-burger">
          
        </button>
      </div>
    </section>
  );
}

export default Header;
