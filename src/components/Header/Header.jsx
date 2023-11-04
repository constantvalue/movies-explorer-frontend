import React from "react";
import "./Header.css";
import logo from "../../images/logo_header.svg";
import AccountButton from "../AccountButton/AccountButton";
import { useEffect, useState } from "react";

// костыльная реализация для этапа по верстке. Потом переделаю на стейты
function openBurger() {
  document.querySelector(".burger-menu").classList.add("burger-menu_active");
}

function Header(props) {
  // const windowWidth = useRef(window.innerWidth);

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

  return (
    <div className={`header ${props.headerDark}`}>
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
          visibility={window.innerWidth < 769 ? "account-button_invisible" : ""}
        />
        <button
          className="header__account-burger"
          onClick={openBurger}
        ></button>
      </div>
    </div>
  );
}

export default Header;
