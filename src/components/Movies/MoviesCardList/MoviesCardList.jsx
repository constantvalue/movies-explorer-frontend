import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <ul className="movies__list">
      {movies.map((movie) => (
        <MoviesCard
          movie={movie}
          key={movie.id}
          likeButton={"movie__like-button"}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;

/* <MoviesCard movie={movie} props={"movie__like-button"} />; */
