import "./Login.css";
import logo from "../../images/logo_header.svg";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <a className="login__logo" href="/">
          <img src={logo} alt="лого"></img>
        </a>
        <h2 className="login__greeting">Рады видеть!</h2>
        <form className="login__form">
          <ul className="login__inputs">
            <li className="login__inputs-item">
              <label className="login__input-label" for="email">
                E-mail
              </label>
              <input
                type="email"
                required
                className="login__input"
                placeholder="pochta@yandex.ru"
              ></input>
            </li>
            <li className="login__inputs-item">
              <label className="login__input-label" for="password">
                Пароль
              </label>
              <input
                type="password"
                required
                className="login__input login__input_error"
                placeholder="••••••••••••••"
              ></input>
              <span className="login__input-span">Что-то пошло не так...</span>
            </li>
          </ul>
        </form>
      </div>
      <button type="submit" className="login__submit">
        Войти
      </button>
      <span className="login__submit-span">
        Ещё не зарегистрированы?{"  "}
        <a href="/signup" className="login__signin">
          Регистрация
        </a>
      </span>
    </section>
  );
}

export default Login;
