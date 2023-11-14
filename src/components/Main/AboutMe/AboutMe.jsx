import React from "react";
import "./AboutMe.css";
import avatar from "../../../images/student_avatar.png";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="aboutme" id="AboutMe">
      <div className="aboutme__container">
        <h2 className="aboutme__title">Студент</h2>
        <div className="aboutme__bio">
          <p className="aboutme__student-name">Виталий</p>
          <p className="aboutme__student-job">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__student-description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            target="_blank"
            rel="noreferrer"
            className="aboutme__student-github"
            to={"https://github.com/"}
          >
            Github
          </Link>
          <img
            className="aboutme__student-avatar"
            src={avatar}
            alt="Аватар"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
