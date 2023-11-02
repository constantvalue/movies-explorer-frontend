import React from "react";
import "./AccountButton.css";

function AccountButton({ modifier, logoModifier }) {
  return (
    <button className={`header__account-button ${modifier}`}>
      <a href="/profile" className="header__account-link">
        Аккаунт
      </a>

      <div className={`header__account-logo ${logoModifier}`} />
    </button>
  );
}

export default AccountButton;
