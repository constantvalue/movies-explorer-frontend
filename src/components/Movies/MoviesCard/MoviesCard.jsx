import "./MoviesCard.css";

function MoviesCard({ movie, likeButton }) {
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
      <span className="movie__duration">1ч 4м</span>
    </li>
  );
}

export default MoviesCard;
