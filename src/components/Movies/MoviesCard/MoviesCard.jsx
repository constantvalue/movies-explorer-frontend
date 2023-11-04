import "./MoviesCard.css";
import movieImage from "../../../images/movie_card.png";

function MoviesCard({props}) {
  return (
    <li className="movie">
      <a href="/" target="_blank">
        <img src={movieImage} alt="Фильм" className="movie__image" />
      </a>
      <div className="movie__description">
        <h2 className="movie__title">Пи Джей Харви: A dog called money</h2>
        <button className={props}></button>
      </div>
      <span className="movie__duration">1ч 4м</span>
    </li>
  );
}

export default MoviesCard;
