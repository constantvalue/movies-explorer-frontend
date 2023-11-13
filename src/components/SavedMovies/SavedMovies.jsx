import "./SavedMovies.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { useState } from "react";
import { useFormWithValidation } from "../../utils/useFormValidation";
import { useEffect } from "react";

function SavedMovies({ savedMovies, handleDeleteMovie }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSwitchToggled, setIsSwitchToggled] = useState(false);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isErrorShown, setIsErrorShown] = useState(false);

  //функцию фильтрации подглядел в пачке.
  function handleSearch() {
    setFilteredMovies(
      savedMovies.filter((movie) => {
        if (isSwitchToggled) {
          return (
            movie.nameRU
              .toLowerCase()
              .includes(values.search?.toLowerCase() || "") &&
            movie.duration <= 40
          );
        } else
          return movie.nameRU
            .toLowerCase()
            .includes(values.search?.toLowerCase() || "");
      })
    );
  }

  useEffect(() => {
    handleSearch();
  }, [isSwitchToggled, savedMovies]);

  useEffect(() => {
    setMoviesToRender(filteredMovies);
  }, [filteredMovies]);

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

        {moviesToRender?.length > 0 ? (
          <MoviesCardList
            savedMovies={moviesToRender}
            handleDeleteMovie={handleDeleteMovie}
          />
        ) : (
          <span className="saved-movies__error-span">Ничего не найдено!</span>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SavedMovies;
