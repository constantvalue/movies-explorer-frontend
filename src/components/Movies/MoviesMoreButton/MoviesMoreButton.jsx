import "./MoviesMoreButton.css";

function MoviesMoreButton({ handleClickMoreMovies, isMoreVisible}) {
  return (
    <section className="more">
        <button  onClick={handleClickMoreMovies} className={`more__button ${isMoreVisible ? "more__button_hidden" : ""}`}>
            Ещё
        </button>
    </section>
  );
}

export default MoviesMoreButton;
