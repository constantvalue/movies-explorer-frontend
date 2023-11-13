import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router";

function MoviesCardList({
  movies,
  moviesCardsCount,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
  setSavedMovies
}) {
  const location = useLocation();

  return (
    <ul className="movies__list">
      {(location.pathname === "/movies" ? movies : savedMovies)
        ?.slice(0, moviesCardsCount)
        .map((movie) => (
          <MoviesCard
            movie={movie}
            key={location.pathname === "/movies" ? movie.id : movie._id}
            savedMovies={savedMovies}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            setSavedMovies={setSavedMovies}
          />
        ))}
    </ul>
  );
}

export default MoviesCardList;
