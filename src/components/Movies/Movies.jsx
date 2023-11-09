import "./Movies.css";

import Footer from "../Footer/Footer";
import MoviesMoreButton from "./MoviesMoreButton/MoviesMoreButton";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
// import MoviesCard from "./MoviesCard/MoviesCard";
import { moviesApi } from "../../utils/moviesApi";
import { useEffect, useState, useCallback } from "react";
import Preloader from "./Preloader/Preloader";
import { filterMovies } from "../../utils/filter";
import {
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  DESKTOP_WIDTH_MORE,
  TABLET_WIDTH_MORE,
  MOBILE_WIDTH_MORE,
} from "../../utils/constants";

function Movies() {
  const [moviesCardsCount, setMoviesCardsCount] = useState(12);

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShort, setIsShort] = useState(false);
  // const [isMoreVisible, setIsMoreVisible] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  //отслеживаем ширину окна.
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  //рендерим нужное количество карточек в зависимости от ширины экрана
  function handleRenderInitialCards() {
    if (window.innerWidth <= TABLET_WIDTH) {
      setMoviesCardsCount(5);
    } else if (window.innerWidth <= DESKTOP_WIDTH) {
      setMoviesCardsCount(8);
    } else {
      setMoviesCardsCount(12);
    }
  }

  useEffect(() => {
    handleRenderInitialCards(windowSize);
  }, [windowSize]);

  //обработчик клика по кнопке "еще". Добавляет нужное количество карточек в зависимости от ширины экрана.
  function handleClickMoreMovies() {
    if (window.innerWidth <= 707) {
      setMoviesCardsCount(
        (moviesCardsCount) => moviesCardsCount + MOBILE_WIDTH_MORE
      );
    } else if (window.innerWidth <= 1139) {
      setMoviesCardsCount(
        (moviesCardsCount) => moviesCardsCount + TABLET_WIDTH_MORE
      );
    } else {
      setMoviesCardsCount(
        (moviesCardsCount) => moviesCardsCount + DESKTOP_WIDTH_MORE
      );
    }
  }

  useEffect(() => {
    const allMovies = localStorage.getItem("movies");
    if (allMovies === null) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem("movies", JSON.stringify(res));
          setMovies(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
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

        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList movies={movies} moviesCardsCount={moviesCardsCount} />
        )}

        <MoviesMoreButton handleClickMoreMovies={handleClickMoreMovies} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Movies;
