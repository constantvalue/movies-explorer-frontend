export function filterMovies(movies, searchQuery, isShort) {
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) && (isShort ? movie.duration <= 40 : true)
    );
  }