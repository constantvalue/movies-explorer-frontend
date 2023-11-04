import "./Movies.css";

import Footer from "../Footer/Footer";
import MoviesMoreButton from "./MoviesMoreButton/MoviesMoreButton";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";

function Movies(props) {
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
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
            <MoviesCard props={"movie__like-button"} />
          </MoviesCardList>
          <MoviesMoreButton />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Movies;
