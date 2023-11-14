import React from "react";
import "./Page404.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <section className="page404">
      <div className="page404__error-message">
        <h2 className="page404__error-code">404</h2>
        <p className="page404__error-caption">Страница не найдена</p>
        <Link onClick={handleClick} className="page404__link">
          Назад
        </Link>
      </div>
    </section>
  );
}

export default Page404;
