import "./MoviesCardList.css";

function MoviesCardList(props) {
  return <ul className="movies__list">{props.children}</ul>;
}

export default MoviesCardList;
