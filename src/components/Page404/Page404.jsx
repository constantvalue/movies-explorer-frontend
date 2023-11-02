import React from "react";
import "./Page404.css";
function Page404() {
  return (
    <section className="page404">
      <div className="page404__error-message">
        <h2 className="page404__error-code">404</h2>
        <p className="page404__error-caption">Страница не найдена</p>
      </div>
      <a href="/" className="page404__link"> Назад</a>
    </section>
  );
}

export default Page404;
