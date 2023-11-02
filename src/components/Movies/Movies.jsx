import "./Movies.css";
// import Promo from "./Promo/Promo";
// import NavTab from "./NavTab/NavTab";
// import AboutProject from "./AboutProject/AboutProject";
// import Techs from "./Techs/Techs";
// import AboutMe from "./AboutMe/AboutMe";
// import Portfolio from "./Portfolio/Portfolio";
// import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchForm/>
    </div>
  );
}

export default Movies;
