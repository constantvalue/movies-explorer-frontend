import React from "react";
import "./Header.css";
import logo from "../../images/logo_header.svg";
import AccountButton from "../AccountButton/AccountButton";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

// костыльная реализация для этапа по верстке. Потом переделаю на стейты
function openBurger() {
  document.querySelector(".burger-menu").classList.add("burger-menu_active");
}

function Header({ headerDark, logoDark, buttonDark, loggedIn }) {
  // const windowWidth = useRef(window.innerWidth);
  const location = useLocation();

  //https://bobbyhadz.com/blog/react-get-window-width-height
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  const headerNotLoggedInState = (
    <div className={`header ${headerDark}`}>
      <div className="header__container">
        <nav className="header__navigation">
          <Link className="header__logo-container" to={"/"}>
            <img className="header__logo" src={logo} alt="Лого" />
          </Link>
        </nav>

        <div className="header__register-container">
          <Link to={"/signup"} className="header__register-button">
            Регистрация
          </Link>
          <Link to={"/signin"} className="header__login-button">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );

  const headerLoggedInState = (
    <div className={`header ${headerDark}`}>
      <div className="header__container">
        <nav className="header__navigation">
          <Link className="header__logo-container" to={"/"}>
            <img className="header__logo" src={logo} alt="Лого" />
          </Link>

          <ul className="header__navigation-container">
            <Link to={"/movies"} className="header__link">
              Фильмы
            </Link>
            <Link to={"/saved-movies"} className="header__link">
              Сохранённые фильмы
            </Link>
          </ul>
        </nav>
        <AccountButton
          logoDark={logoDark}
          buttonDark={buttonDark}
          visibility={window.innerWidth < 769 ? "account-button_invisible" : ""}
        />
        <button
          className="header__account-burger"
          onClick={openBurger}
        ></button>
      </div>
    </div>
  );

  return !loggedIn && location.pathname === "/"
    ? headerNotLoggedInState
    : headerLoggedInState;
}

export default Header;
