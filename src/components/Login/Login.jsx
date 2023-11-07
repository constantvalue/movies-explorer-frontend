import "./Login.css";
import logo from "../../images/logo_header.svg";
import { useFormWithValidation } from "../../utils/useFormValidation";

function Register() {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  return (
    <section className="login">
      <div className="login__container">
        <a className="login__logo" href="/">
          <img src={logo} alt="лого"></img>
        </a>
        <h2 className="login__greeting">Добро пожаловать!</h2>
        <form className="login__form">
          <ul className="login__inputs">
            <li className="login__inputs-item">
              <label className="login__input-label" for="email">
                E-mail
              </label>
              <input
                onChange={handleChange}
                value={values.email ? values.email : ""}
                type="email"
                name="email"
                required
                className={
                  errors.email
                    ? "login__input login__input_error"
                    : "login__input"
                }
                placeholder="pochta@yandex.ru"
              ></input>
              <span className="login__input-span">{errors.email}</span>
            </li>
            <li className="login__inputs-item">
              <label className="login__input-label" for="password">
                Пароль
              </label>
              <input
                onChange={handleChange}
                value={values.password ? values.password : ""}
                type="password"
                name="password"
                required
                minLength={8}
                placeholder="••••••••••••••"
                className={
                  errors.password
                    ? "login__input login__input_error"
                    : "login__input"
                }
              ></input>
              <span className="login__input-span">{errors.password}</span>
            </li>
          </ul>
          <button type="submit" className={`login__submit ${isValid === false ? "login__submit_disabled" : ""}`} disabled={!isValid}>
            Войти
          </button>
        </form>
      </div>

      <span className="login__submit-span">
      Ещё не зарегистрированы?{"  "}
        <a href="/signup" className="login__signin">
        Регистрация
        </a>
      </span>
    </section>
  );
}

export default Register;
