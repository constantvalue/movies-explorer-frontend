import "./Login.css";
import logo from "../../images/logo_header.svg";
import { useFormWithValidation } from "../../utils/useFormValidation";
import * as auth from "../../utils/auth";
import { useNavigate } from "react-router";
import { useState } from "react";

function Login({ handleLogin }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const [isError, setIsError] = useState(false);
  const [backendMessage, setBackendMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signIn(values.email, values.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          // setFormValue({ email: "", password: "" });
          handleLogin();
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        setIsError(true);
        if (err === "Ошибка401") {
          setBackendMessage(
            "Неверный логин или пароль"
          );
        } else {
          setBackendMessage(
            "При авторизации произошла ошибка"
          );
        }
   
        console.log(err);
      });
  };

  return (
    <section className="login">
      <div className="login__container">
        <a className="login__logo" href="/">
          <img src={logo} alt="лого"></img>
        </a>
        <h2 className="login__greeting">Добро пожаловать!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <ul className="login__inputs">
            <li className="login__inputs-item">
              <label className="login__input-label">E-mail</label>
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
              <label className="login__input-label">Пароль</label>
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
          <span
            className={`login__error-span ${
              isError ? "login__error-span_visible" : ""
            }`}
          >
            {backendMessage}
          </span>
          <button
            type="submit"
            className={`login__submit ${
              isValid === false ? "login__submit_disabled" : ""
            }`}
            disabled={!isValid}
          >
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

export default Login;
