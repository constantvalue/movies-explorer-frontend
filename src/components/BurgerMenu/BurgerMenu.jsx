import "./BurgerMenu.css";
import AccountButton from "../AccountButton/AccountButton";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function BurgerMenu(props) {
  const location = useLocation();
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

        <Link
          to={"/"}
          className={`burger-menu__link ${
            location.pathname === "/" ? "burger-menu__link_active" : ""
          }`}
        >
          Главная
        </Link>
        <Link
          to={"/movies"}
          className={`burger-menu__link ${
            location.pathname === "/movies" ? "burger-menu__link_active" : ""
          }`}
        >
          Фильмы
        </Link>
        <Link
          to={"/saved-movies"}
          className={`burger-menu__link ${
            location.pathname === "/saved-movies"
              ? "burger-menu__link_active"
              : ""
          }`}
        >
          Сохранённые фильмы
        </Link>

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
