import "./MoviesCard.css";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function MoviesCard({
  movie,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  //монструозный код, который без 0.5 водки не поймешь. Иначе не придумал.
  //Долго мучался с toggle как в проекте Mesto, но ничего не получилось.
  //Поэтом вот такие костыли.
  const onLikeClick = () => {
    const handlePrefilter = savedMovies.filter((m) => {
      return m.movieId === movie.id;
    });
    if (savedMovies.some((element) => movie.id === element.movieId)) {
      handleDeleteMovie(handlePrefilter[0]);
    } else {
      handleSaveMovie(movie);
    }
  };
  // console.log(savedMovies)
  const onDeleteClick = () => {
    handleDeleteMovie(movie);
  };

  //рендерю лайки при загрузке роута /movies
  useEffect(() => {
    if (location.pathname === "/movies")
      setIsLiked(savedMovies.some((element) => movie.id === element.movieId));
  }, [location.pathname, savedMovies, movie.id, setIsLiked]);

  // https://shorturl.at/mDEGU код подсмотрел тут
  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return hours ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }
  return (
    <li className="movie">
      <Link rel="noreferrer" to={movie.trailerLink} target="_blank">
        <img
          src={
            location.pathname === "/movies"
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          alt="Фильм"
          className="movie__image"
        />
      </Link>
      <div className="movie__description">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <button
          onClick={
            location.pathname === "/movies" ? onLikeClick : onDeleteClick
          }
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
