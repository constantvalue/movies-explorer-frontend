import "./Register.css";
import logo from "../../images/logo_header.svg";

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <a className="register__logo" href="/">
          <img src={logo} alt="лого"></img>
        </a>
        <h2 className="register__greeting">Добро пожаловать!</h2>
        <form className="register__form">
          <ul className="register__inputs">
            <li className="register__inputs-item">
              <label className="register__input-label" for="name">
                Имя
              </label>
              <input
                type="text"
                required
                className="register__input"
                placeholder="Виталий"
              ></input>
            </li>
            <li className="register__inputs-item">
              <label className="register__input-label" for="email">
                E-mail
              </label>
              <input
                type="email"
                required
                className="register__input"
                placeholder="pochta@yandex.ru"
              ></input>
            </li>
            <li className="register__inputs-item">
              <label className="register__input-label" for="password">
                Пароль
              </label>
              <input
                type="password"
                required
                className="register__input register__input_error"
                placeholder="••••••••••••••"
              ></input>
              <span className="register__input-span">
                Что-то пошло не так...
              </span>
            </li>
          </ul>
          <button type="submit" className="register__submit">
            Зарегестрироваться
          </button>
          <span className="register__submit-span">
            Уже зарегистрированы?{"  "}
            <a href="/login" className="register__signin">
              Войти
            </a>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Register;
