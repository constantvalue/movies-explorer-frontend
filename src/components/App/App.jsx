import "./App.css";
import Main from "../Main/Main";
import Page404 from "../Page404/Page404";
import { Route, Routes } from "react-router";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* костыльная реализация. На следующем этапе переделаю */}
      <BurgerMenu
        logoDark="logo-dark"
        buttonDark="button-dark"
      />
    </>
  );
}

export default App;
