import "./Register.css";
import logo from "../../images/logo_header.svg";
import { useFormWithValidation } from "../../utils/useFormValidation";
import * as auth from "../../utils/auth";
import { useNavigate } from "react-router";

function Register() {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== "") {
      auth
        .signUp(values.name, values.email, values.password)
        .then(() => {
          navigate("/signin", { replace: true });
        })
        .catch(() => {});
    }
  };

  return (
    <section className="register">
      <div className="register__container">
        <a className="register__logo" href="/">
          <img src={logo} alt="лого"></img>
        </a>
        <h2 className="register__greeting">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <ul className="register__inputs">
            <li className="register__inputs-item">
              <label className="register__input-label" >
                Имя
              </label>
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
              <label className="register__input-label" >
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
                    ? "register__input register__input_error"
                    : "register__input"
                }
                placeholder="pochta@yandex.ru"
              ></input>
              <span className="register__input-span">{errors.email}</span>
            </li>
            <li className="register__inputs-item">
              <label className="register__input-label" >
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
                    ? "register__input register__input_error"
                    : "register__input"
                }
              ></input>
              <span className="register__input-span">{errors.password}</span>
            </li>
          </ul>
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
        <a href="/signin" className="register__signin">
          Войти
        </a>
      </span>
    </section>
  );
}

export default Register;
