import "./Profile.css";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../utils/useFormValidation";
import { api } from "../../utils/mainApi";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile({ handleLogout, handlSetCurrentUser }) {
  const { values, isValid, handleChange, setValues } = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);
  const [isClicked, setIsClicked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  //проверяю были изменения или нет.
  const isButtonDisabled =
    isValid &&
    (values.name !== currentUser.name || values.email !== currentUser.email);

    console.log(currentUser)

  //заполняю данные из контекста при монтировании.

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .updateUserInfo(values.name, values.email)
      .then((data) => {
        handlSetCurrentUser({ name: data.name, email: data.email });
        setIsSuccess(true);
        setStatusMessage("Данные успешно сохранены!");
      })

      .catch((err) => {
        setIsSuccess(false);
        setStatusMessage("При обновлении профиля произошла ошибка.");
        console.log(err);
      });
  };

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser.email, currentUser.name, setValues]);
  


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
                  disabled={!isClicked}
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
                  disabled={!isClicked}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={values.email ? values.email : ""}
                  required
                  className="profile__input"
                ></input>
              </li>
            </ul>
            <span
              className={`profile__status-span ${
                isSuccess ? "profile__status-span_green" : ""
              }`}
            >
              {statusMessage}
            </span>
            <button
              disabled={!isButtonDisabled}
              type="submit"
              className={`profile__edit-confirm ${
                isClicked ? "profile__edit-confirm_visible" : ""
              } ${!isButtonDisabled ? "profile__edit-confirm_disabled" : ""}`}
            >
              Сохранить
            </button>
            <div
              className={`profile__button-container ${
                isClicked ? "profile__button-container_hidden" : ""
              }`}
            >
              <button
                onClick={setIsClicked}
                type="button"
                className="profile__edit"
              >
                Редактировать
              </button>
              <Link to={"/"} className="profile__logout" onClick={handleLogout}>
                Выйти из аккаунта
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
