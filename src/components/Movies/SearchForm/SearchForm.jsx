import "./SearchForm.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-input-container">
          <input
            className="search__form-input"
            placeholder="Фильм"
            type="text"
          ></input>
          <input className="search__form-submit" value="" type="submit"></input>
        </div>
        <div className="search__form-thumbler">
          <ToggleSwitch />
          <span className="switch__title">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
