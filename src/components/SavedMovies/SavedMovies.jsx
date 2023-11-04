import "./SavedMovies.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import SavedMoviesDivider from "./SavedMoviesDivider/SavedMoviesDivider";

function SavedMovies() {
  return (
    <div className="movies">
      <Header
        headerDark="header_dark"
        logoDark="header__account-logo-dark"
        buttonDark="header__account-button-dark"
      />
      <div className="movies__content">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard props={"movie__delete-button"} />
          <MoviesCard props={"movie__delete-button"} />
          <MoviesCard props={"movie__delete-button"} />
        </MoviesCardList>
        <SavedMoviesDivider />
      </div>
      <Footer />
    </div>
  );
}

export default SavedMovies;
