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
// import { filterMovies } from "../../utils/filter";
import {
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  DESKTOP_WIDTH_MORE,
  TABLET_WIDTH_MORE,
  MOBILE_WIDTH_MORE,
  DESKTOP_WIDTH_INITIAL_COUNT,
  TABLET_WIDTH_INITIAL_COUNT,
  MOBILE_WIDTH_INITIAL_COUNT,
} from "../../utils/constants";
import { useFormWithValidation } from "../../utils/useFormValidation";

function Movies() {
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormWithValidation();
  const [moviesCardsCount, setMoviesCardsCount] = useState(
    DESKTOP_WIDTH_INITIAL_COUNT
  );
  const [isLoading, setIsLoading] = useState(false);
  // const [isMoreVisible, setIsMoreVisible] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSwitchToggled, setIsSwitchToggled] = useState(false);
  // const [moviesHasFound, setMoviesHasFound] = useState(false);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isErrorShown, setIsErrorShown] = useState(false);

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
      setMoviesCardsCount(MOBILE_WIDTH_INITIAL_COUNT);
    } else if (window.innerWidth <= DESKTOP_WIDTH) {
      setMoviesCardsCount(TABLET_WIDTH_INITIAL_COUNT);
    } else {
      setMoviesCardsCount(DESKTOP_WIDTH_INITIAL_COUNT);
    }
  }

  //обработчик клика по кнопке "еще". Добавляет нужное количество карточек в зависимости от ширины экрана.
  function handleClickMoreMovies() {
    if (window.innerWidth <= TABLET_WIDTH) {
      setMoviesCardsCount(
        (moviesCardsCount) => moviesCardsCount + MOBILE_WIDTH_MORE
      );
    } else if (window.innerWidth <= DESKTOP_WIDTH) {
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
    const savedFilteredMoviesData = JSON.parse(
      localStorage.getItem("filteredMovies")
    );
    if (savedFilteredMoviesData?.searchQuery) {
      values.search = savedFilteredMoviesData.searchQuery;
      handleFilter();
    }
    if (savedFilteredMoviesData?.thumblerState)
      setIsSwitchToggled(savedFilteredMoviesData.thumblerState);
  }, []);

  // Сохраняю состояние строки поиска, тумблера и массива фильмов в локал сторадж.
  // Использую потом в useEffect для рендера сохраненного состояния.

  function saveFiltersDataToLocalStorage() {
    localStorage.setItem(
      "filteredMovies",
      JSON.stringify({
        movies: filteredMovies,
        searchQuery: values.search?.toLowerCase(),
        thumblerState: isSwitchToggled,
      })
    );
  }

  function handleFilter() {
    setFilteredMovies(
      JSON.parse(localStorage.getItem("movies"))?.filter((movie) => {
        if (isSwitchToggled) {
          return (
            movie.nameRU.toLowerCase().includes(values.search?.toLowerCase()) &&
            movie.duration <= 40
          );
        } else
          return movie.nameRU
            .toLowerCase()
            .includes(values.search?.toLowerCase());
      })
    );
  }
  const allMovies = localStorage.getItem("movies");
  function handleSearch() {
    if (allMovies === null) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem("movies", JSON.stringify(res));
          handleFilter();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleFilter();
    }
  }

  useEffect(() => {
    saveFiltersDataToLocalStorage();
    setMoviesToRender(filteredMovies);
  }, [filteredMovies, isSwitchToggled]);

  useEffect(() => {
    // setMoviesHasFound(filteredMovies);
    handleFilter();
  }, [isSwitchToggled]);

  useEffect(() => {
    handleRenderInitialCards(windowSize);
  }, [windowSize, filteredMovies, isSwitchToggled]);

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
        <SearchForm
          handleChange={handleChange}
          values={values}
          handleSearch={handleSearch}
          setIsSwitchToggled={setIsSwitchToggled}
          isSwitchToggled={isSwitchToggled}
          errors={errors}
          isValid={isValid}
          setIsErrorShown={setIsErrorShown}
          isErrorShown={isErrorShown}
        />

        {isLoading ? (
          <Preloader />
        ) : moviesToRender?.length > 0 || allMovies === null ? (
          <MoviesCardList
            movies={moviesToRender}
            moviesCardsCount={moviesCardsCount}
          />
        ) : (
          <span className="movies__error-span">Ничего не найдено!</span>
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
