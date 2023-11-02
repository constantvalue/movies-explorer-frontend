import React from "react";
import "./Header.css";
import logo from "../../images/logo_header.svg";
import AccountButton from "../AccountButton/AccountButton";

function Header({ modifier, logoModifier }) {
  return (
    <section className={`header ${modifier}`}>
      <div className="header__container">
        <nav className="header__navigation">
          <img className="header__logo" src={logo} alt="Лого" />
          <ul className="header__navigation-container">
            <a href="/movies" className="header__link">
              Фильмы
            </a>
            <a href="/saved" className="header__link">
              Сохранённые фильмы
            </a>
          </ul>
        </nav>

        <AccountButton
    logoModifier
        />
        {/* <button className="header__account-button">
          <a href="/profile" className="header__account-link">
            Аккаунт
          </a>

          <div className="header__account-logo" />
        </button> */}
        <button className="header__account-burger"></button>
      </div>
    </section>
  );
}

export default Header;
