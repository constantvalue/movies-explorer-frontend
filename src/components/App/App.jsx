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
import { useEffect, useState, useRef } from "react";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Movies/Preloader/Preloader";

function App() {
  const [isInfoTooltipPopupOpen, setIsInfotooltipPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  //стейт контекста.
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  //https://app.pachca.com/chats?thread_id=2247049 решение нашел тут.
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkTokenValidity(jwt)
        .then((res) => {
          setLoggedIn(true);
          setIsLoading(false);

          setCurrentUser({ _id: res._id, name: res.name, email: res.email });
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  console.log(loggedIn);

  return (
    <>
      <div className="app">
        {isLoading ? (
          <Preloader />
        ) : (
          <CurrentUserContext.Provider value={currentUser}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/movies"
                element={
                  <ProtectedRouteElement element={Movies} loggedIn={loggedIn} />
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Page404 />} />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRouteElement
                    element={SavedMovies}
                    loggedIn={loggedIn}
                  />
                }
              />
              <Route
                path="/signin"
                element={<Login handleLogin={handleLogin} />}
              />
              <Route path="/signup" element={<Register />} />
            </Routes>

            {/* костыльная реализация. На следующем этапе переделаю */}
            <BurgerMenu logoDark="logo-dark" buttonDark="button-dark" />
          </CurrentUserContext.Provider>
        )}
      </div>
    </>
  );
}

export default App;
