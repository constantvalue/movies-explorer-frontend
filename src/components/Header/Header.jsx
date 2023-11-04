import React from "react";
import "./Header.css";
import logo from "../../images/logo_header.svg";
import AccountButton from "../AccountButton/AccountButton";

// const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

// function handleOpenBurgerMenu() {
//   setIsBurgerMenuOpen(true);
// }

// костыльная реализация для этапа по верстке. Потом переделаю на стейты
function openBurger() {
  document.querySelector(".burger-menu").classList.add("burger-menu_active");
}

function Header(props) {
  return (
    <section className={`header ${props.headerDark}`}>
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

        <AccountButton
          logoDark={props.logoDark}
          buttonDark={props.buttonDark}
        />

        <button
          className="header__account-burger"
          onClick={openBurger}
        ></button>
      </div>
    </section>
  );
}

export default Header;
