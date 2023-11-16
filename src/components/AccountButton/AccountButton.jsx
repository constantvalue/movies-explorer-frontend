import React from "react";
import "./AccountButton.css";
import { Link } from "react-router-dom";

function AccountButton(props) {
  return (
    <button
      className={`account-button ${props.buttonDark} ${props.visibility}`}
    >
      <Link to={"/profile"} className="account-button__link">
        Аккаунт
      </Link>

      <div className={`account-button__logo ${props.logoDark}`} />
    </button>
  );
}

export default AccountButton;
