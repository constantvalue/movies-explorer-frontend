import "./MoviesCard.css";
import { useLocation } from "react-router";

function MoviesCard({ movie, cardButton }) {
  const location = useLocation();

  // https://shorturl.at/mDEGU код подсмотрел тут
  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return hours ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }
  console.log(location);
  return (
    <li className="movie">
      <a href={movie.trailerLink} target="_blank">
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
          className={
            location.pathname === "/movies"
              ? "movie__like-button"
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
