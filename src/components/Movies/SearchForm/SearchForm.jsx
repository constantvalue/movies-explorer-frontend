import "./SearchForm.css";
// import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm() {
  return (
    <section className="searchform__section">
      <form className="search__form">
        <div className="search__form-input-container">
          <input
            className="search__form-input"
            placeholder="Фильм"
            type="text"
          ></input>
          <input className="search__form-submit" type="submit"></input>
        </div>
        <div className="search__form-thumbler">
            {/* <FilterCheckbox text="Короткометражки"/> */}
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
