import "./Movies.css";

import Footer from "../Footer/Footer";
import MoviesMoreButton from "./MoviesMoreButton/MoviesMoreButton";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
// import MoviesCard from "./MoviesCard/MoviesCard";
import { moviesApi } from "../../utils/moviesApi";
import { useEffect, useState } from "react";
import Preloader from "./Preloader/Preloader";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    moviesApi
      .getMovies()
      .then((res) => {
        setMovies(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <SearchForm />

        {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}

        <MoviesMoreButton />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Movies;
