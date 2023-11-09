import "./SavedMovies.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";


function SavedMovies() {
  return (
    <>
      <header>
        <Header
          headerDark="header_dark"
          logoDark="logo-dark"
          buttonDark="button-dark"
        />
      </header>

      <main className="movies">
        <div className="movies__content">
          <SearchForm />
          <MoviesCardList>
            <MoviesCard props={"movie__delete-button"} />
            <MoviesCard props={"movie__delete-button"} />
            <MoviesCard props={"movie__delete-button"} />
          </MoviesCardList>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SavedMovies;
