import React from "react";
import "./AccountButton.css";

function AccountButton(props) {
  return (
    <button
      className={`account-button ${props.buttonDark} ${props.visibility}`}
    >
      <a href="/profile" className="account-button__link">
        Аккаунт
      </a>

      <div className={`account-button__logo ${props.logoDark}`} />
    </button>
  );
}

export default AccountButton;
