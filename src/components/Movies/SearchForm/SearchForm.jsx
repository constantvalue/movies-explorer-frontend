import "./SearchForm.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useEffect } from "react";

function SearchForm({
  values,
  handleChange,
  errors,
  isValid,
  isSwitchToggled,
  setIsSwitchToggled,
  handleSearch,
  setIsErrorShown,
  isErrorShown,
}) {
  useEffect(() => {
    setIsErrorShown(false);
  }, [values.search]);

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={(evt) => {
          if (values.search) {
            evt.preventDefault();
            handleSearch();
            setIsErrorShown(false);
          } else {
            evt.preventDefault();
            setIsErrorShown(true);
          }
        }}
      >
        <div className="search__form-input-container">
          <input
            className="search__form-input"
            placeholder="Фильм"
            type="text"
            name="search"
            value={values.search || ""}
            onChange={handleChange}
          ></input>
          <input
            // disabled={!isValid}
            className="search__form-submit"
            value=""
            type="submit"
          ></input>
        </div>
        {isErrorShown && (
          <span className="search__form-error">Введите ключевое слово</span>
        )}
        <div className="search__form-thumbler">
          <ToggleSwitch
            isSwitchToggled={isSwitchToggled}
            setIsSwitchToggled={setIsSwitchToggled}
          />
          <span className="search__form-thumbler-title">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
