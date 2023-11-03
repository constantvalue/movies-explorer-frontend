import React from "react";
import "./AccountButton.css";

function AccountButton() {
  return (
    <button className="header__account-button">
      <a href="/profile" className="header__account-link">
        Аккаунт
      </a>

      <div className="header__account-logo" />
    </button>
  );
}

export default AccountButton;
