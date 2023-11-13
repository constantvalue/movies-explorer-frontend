import "./SavedMovies.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import { useState } from "react";
import { api } from "../../utils/mainApi";
import { useFormWithValidation } from "../../utils/useFormValidation";

function SavedMovies({ savedMovies, setSavedMovies, handleDeleteMovie }) {
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormWithValidation();
  const [isLoading, setIsLoading] = useState(false);
  // const [isMoreVisible, setIsMoreVisible] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSwitchToggled, setIsSwitchToggled] = useState(false);
  // const [moviesHasFound, setMoviesHasFound] = useState(false);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isErrorShown, setIsErrorShown] = useState(false);

  //временная затычка
  function handleSearch() {
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

  console.log(savedMovies);

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
          <MoviesCardList
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SavedMovies;
