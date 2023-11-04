import React from "react";
import "./AccountButton.css";

function AccountButton(props) {
  return (
    <button className={`header__account-button ${props.buttonDark}`}>
      <a href="/profile" className="header__account-link">
        Аккаунт
      </a>

      <div className={`header__account-logo ${props.logoDark}`} />
    </button>
  );
}

export default AccountButton;
