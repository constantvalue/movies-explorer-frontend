import "./App.css";
import Main from "../Main/Main";
import Page404 from "../Page404/Page404";
import { Route, Routes, Navigate, useNavigate } from "react-router";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { api } from "../../utils/api";
import { useEffect, useState } from "react";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isInfoTooltipPopupOpen, setIsInfotooltipPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  //стейт контекста.
  const [currentUser, setCurrentUser] = useState({});
  console.log(currentUser);
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    handleTokenCheck();
  }, [loggedIn]);

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkTokenValidity(jwt)
        .then((res) => {
          handleLogin(res.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleLogin = (email) => {
    setLoggedIn(true);
    navigate("/", { replace: true });
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </div>
        {/* костыльная реализация. На следующем этапе переделаю */}
        <BurgerMenu logoDark="logo-dark" buttonDark="button-dark" />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
