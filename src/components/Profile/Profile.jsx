import "./Profile.css";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../utils/useFormValidation";
import { api } from "../../utils/api";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import { useContext, useEffect } from "react";

function Profile({ handleLogout, handlSetCurrentUser }) {
  const { values, errors, isValid, handleChange, setValues } =
    useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .updateUserInfo(values.name, values.email)
      .then((data) => {
        handlSetCurrentUser({ name: data.name, email: data.email });
      })

      .catch((err) => console.log(err));
  };
  return (
    <>
      <section className="profile">
        <header>
          <Header
            headerDark="header_dark"
            logoDark="logo-dark"
            buttonDark="button-dark"
          />
        </header>

        <div className="profile__container">
          <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
          <form className="profile__form" onSubmit={handleSubmit}>
            <ul className="profile__inputs">
              <li className="profile__inputs-item">
                <label className="profile__input-label">Имя</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  value={values.name ? values.name : ""}
                  required
                  className="profile__input"
                ></input>
              </li>
              <li className="profile__inputs-item">
                <label className="profile__input-label">E-mail</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={values.email ? values.email : ""}
                  required
                  className="profile__input"
                ></input>
              </li>
            </ul>
            <button type="submit" className="profile__edit">
              Редактировать
            </button>
          </form>
        </div>

        <a href="/" className="profile__logout" onClick={handleLogout}>
          Выйти из аккаунта
        </a>
      </section>
    </>
  );
}

export default Profile;
