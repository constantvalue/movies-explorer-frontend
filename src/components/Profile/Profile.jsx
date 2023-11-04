import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <section className="profile">
      <Header
        headerDark="header_dark"
        logoDark="logo-dark"
        buttonDark="button-dark"
      />
      <div className="profile__container">
        <h2 className="profile__greeting">Привет, Виталий!</h2>
        <form className="profile__form">
          <ul className="profile__inputs">
            <li className="profile__inputs-item">
              <label className="profile__input-label" for="name">
                Имя
              </label>
              <input
                type="text"
                required
                className="profile__input"
                placeholder="Виталий"
              ></input>
            </li>
            <li className="profile__inputs-item">
              <label className="profile__input-label" for="email">
                E-mail
              </label>
              <input
                type="email"
                required
                className="profile__input"
                placeholder="pochta@yandex.ru"
              ></input>
            </li>
          </ul>
          <button type="submit" className="profile__edit">
            Редактировать
          </button>
          <a href="/" className="profile__logout">
            Выйти из аккаунта
          </a>
        </form>
      </div>
    </section>
  );
}

export default Profile;
