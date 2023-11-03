import React from "react";
import "./Header.css";
import logo from "../../images/logo_header.svg";
import AccountButton from "../AccountButton/AccountButton";

function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <nav className="header__navigation">
          <a className="header__logo-container" href="/">
            <img className="header__logo" src={logo} alt="Лого" />
          </a>

          <ul className="header__navigation-container">
            <a href="/movies" className="header__link">
              Фильмы
            </a>
            <a href="/saved-movies" className="header__link">
              Сохранённые фильмы
            </a>
          </ul>
        </nav>

        <AccountButton />

        <button className="header__account-burger"></button>
      </div>
    </section>
  );
}

export default Header;
