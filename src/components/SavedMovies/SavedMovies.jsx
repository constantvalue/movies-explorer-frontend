import "./SavedMovies.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import SavedMoviesDivider from "./SavedMoviesDivider/SavedMoviesDivider";

function SavedMovies() {
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </MoviesCardList>
      {/* <MoviesMoreButton /> */}
      <SavedMoviesDivider/>
      <Footer />
    </div>
  );
}

export default SavedMovies;
