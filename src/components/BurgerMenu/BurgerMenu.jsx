import "./BurgerMenu.css";
import AccountButton from "../AccountButton/AccountButton";

function BurgerMenu(props) {
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

        <a href="/" className="burger-menu_link">
          Главная
        </a>
        <a href="/movies" className="burger-menu_link">
          Фильмы
        </a>
        <a href="/saved-movies" className="burger-menu_link">
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
