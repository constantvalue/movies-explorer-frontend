import "./Register.css";
import logo from "../../images/logo_header.svg";
import { useFormWithValidation } from "../../utils/useFormValidation";
import * as auth from "../../utils/auth";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ handleLogin, loggedIn }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const [isError, setIsError] = useState(false);
  const [backendMessage, setBackendMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== "") {
      auth
        .signUp(values.name, values.email, values.password)
        .then(() => {
          auth
            .signIn(values.email, values.password)
            .then((data) => {
              if (data.token) {
                localStorage.setItem("jwt", data.token);
                handleLogin();
                navigate("/movies", { replace: true });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          setIsError(true);
          if (err === "Ошибка409") {
            setBackendMessage("Такой пользователь уже зарегестрирован");
          } else {
            setBackendMessage(
              "При регистрации произошла ошибка (проверьте токен)"
            );
          }

          console.log(err);
        });
    }
  };

  if (loggedIn) {
    navigate("/movies", { replace: true });
  }

  return (
    <section className="register">
      <div className="register__container">
        <Link className="register__logo" to={"/"}>
          <img src={logo} alt="лого"></img>
        </Link>
        <h2 className="register__greeting">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <ul className="register__inputs">
            <li className="register__inputs-item">
              <label className="register__input-label">Имя</label>
              <input
                onChange={handleChange}
                value={values.name ? values.name : ""}
                type="text"
                name="name"
                required
                className="register__input"
                placeholder="Виталий"
                minLength={3}
                maxLength={30}
              ></input>
              <span className="register__input-span">{errors.name}</span>
            </li>
            <li className="register__inputs-item">
              <label className="register__input-label">E-mail</label>
              <input
                onChange={handleChange}
                value={values.email ? values.email : ""}
                type="email"
                name="email"
                //https://stackoverflow.com/questions/23953782/javascript-email-regex-validation
                pattern="^.+@.+\..+$"
                required
                className={
                  errors.email
                    ? "register__input register__input_error"
                    : "register__input"
                }
                placeholder="pochta@yandex.ru"
              ></input>
              <span className="register__input-span">{errors.email}</span>
            </li>
            <li className="register__inputs-item">
              <label className="register__input-label">Пароль</label>
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
                    ? "register__input register__input_error"
                    : "register__input"
                }
              ></input>
              <span className="register__input-span">{errors.password}</span>
            </li>
          </ul>
          <span
            className={`register__error-span ${
              isError ? "register__error-span_visible" : ""
            }`}
          >
            {backendMessage}
          </span>
          <button
            type="submit"
            className={`register__submit ${
              isValid === false ? "register__submit_disabled" : ""
            }`}
            disabled={!isValid}
          >
            Зарегестрироваться
          </button>
        </form>
      </div>

      <span className="register__submit-span">
        Уже зарегистрированы?{"  "}
        <Link to={"/signin"} className="register__signin">
          Войти
        </Link>
      </span>
    </section>
  );
}

export default Register;
