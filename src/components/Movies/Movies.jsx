import "./Movies.css";

import Footer from "../Footer/Footer";
import MoviesMoreButton from "./MoviesMoreButton/MoviesMoreButton";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";

function Movies() {
  return (
    <div className="movies">
      <Header />
      <div className="movies__content">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </MoviesCardList>
        <MoviesMoreButton />
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
