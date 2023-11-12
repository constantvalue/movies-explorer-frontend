import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";

function MoviesCardList({ movies, moviesCardsCount }) {

  return (
    <ul className="movies__list">
      {movies?.slice(0, moviesCardsCount).map((movie) => (
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
