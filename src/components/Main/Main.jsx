import "./Main.css";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Main() {
  return (
    <>
      <header>
        <Header headerDark="" logoDark="" buttonDark="" />
      </header>

      <main className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main;
