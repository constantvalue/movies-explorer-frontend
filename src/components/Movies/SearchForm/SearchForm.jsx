import "./SearchForm.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function SearchForm({
  values,
  handleChange,
  errors,
  isValid,
  isSwitchToggled, setIsSwitchToggled,
  handleSearch,
}) {
  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSearch();
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
          <input className="search__form-submit" value="" type="submit"></input>
        </div>
        <div className="search__form-thumbler">
          <ToggleSwitch isSwitchToggled={isSwitchToggled} setIsSwitchToggled={setIsSwitchToggled}/>
          <span className="search__form-thumbler-title">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
