import "./BurgerMenu.css";
import AccountButton from "../AccountButton/AccountButton";
import { useLocation } from "react-router";

function BurgerMenu(props) {
  const location = useLocation();

  console.log(location.pathname);
  // костыльная реализация. На следующем этапе переделаю
  function onClick() {
    document
      .querySelector(".burger-menu")
      .classList.remove("burger-menu_active");
  }

  return (
    <div className="burger-menu">
      <div className="burger-menu__container">
        <button
          className="burger-menu__close-button"
          type="button"
          onClick={onClick}
        ></button>

        <a
          href="/"
          className={`burger-menu__link ${
            location.pathname === "/" ? "burger-menu__link_active" : ""
          }`}
        >
          Главная
        </a>
        <a
          href="/movies"
          className={`burger-menu__link ${
            location.pathname === "/movies" ? "burger-menu__link_active" : ""
          }`}
        >
          Фильмы
        </a>
        <a
          href="/saved-movies"
          className={`burger-menu__link ${
            location.pathname === "/saved-movies"
              ? "burger-menu__link_active"
              : ""
          }`}
        >
          Сохранённые фильмы
        </a>

        <div className="burger-menu__account-button">
          <AccountButton
            logoDark={props.logoDark}
            buttonDark={props.buttonDark}
          />
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
