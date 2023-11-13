import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";
import { useLocation } from "react-router";

function MoviesCardList({ movies, moviesCardsCount, savedMovies }) {
  const location = useLocation();

  return (
    <ul className="movies__list">
      {(location.pathname === "/movies" ? movies : savedMovies)
        ?.slice(0, moviesCardsCount)
        .map((movie) => (
          <MoviesCard
            movie={movie}
            key={location.pathname === "/movies" ? movie.id : movie.movieId}
            // cardButton={cardButton}
          />
        ))}
    </ul>
  );
}

export default MoviesCardList;
