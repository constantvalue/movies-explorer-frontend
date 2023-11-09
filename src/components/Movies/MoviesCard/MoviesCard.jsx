import "./MoviesCard.css";

function MoviesCard({ movie, likeButton }) {
  // https://shorturl.at/mDEGU код подсмотрел тут
  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return hours ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  return (
    <li className="movie">
      <a href={movie.trailerLink} target="_blank">
        <img
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt="Фильм"
          className="movie__image"
        />
      </a>
      <div className="movie__description">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <button className={likeButton}></button>
      </div>
      <span className="movie__duration">
        {toHoursAndMinutes(movie.duration)}
      </span>
    </li>
  );
}

export default MoviesCard;
