import "./MoviesCard.css";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

function MoviesCard({ movie, cardButton, savedMovies, handleSaveMovie, handleDeleteMovie }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (location.pathname === "/movies")
      setIsLiked(savedMovies.some((element) => movie.id === element.movieId));
  }, [savedMovies, movie.id, setIsLiked, location.pathname]);

  function onLikeClick() {
    if (savedMovies.some((element) => movie.id === element.movieId)) {
      setIsLiked(true);
      handleSaveMovie(movie);
    } else {
      setIsLiked(false);
      handleSaveMovie(movie);
    }
  }

  const onDeleteClick = () => {
    handleDeleteMovie(movie)
  }

  


  // https://shorturl.at/mDEGU код подсмотрел тут
  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return hours ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }
  return (
    <li className="movie">
      <a rel="noreferrer" href={movie.trailerLink} target="_blank">
        <img
          src={
            location.pathname === "/movies"
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          alt="Фильм"
          className="movie__image"
        />
      </a>
      <div className="movie__description">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <button
          onClick={location.pathname === "/movies" ? onLikeClick : onDeleteClick}
          className={
            location.pathname === "/movies"
              ? `movie__like-button ${
                  isLiked ? "movie__like-button_active" : ""
                }`
              : "movie__delete-button"
          }
        ></button>
      </div>
      <span className="movie__duration">
        {toHoursAndMinutes(movie.duration)}
      </span>
    </li>
  );
}

export default MoviesCard;
