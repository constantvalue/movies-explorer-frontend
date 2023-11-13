import "./App.css";
import Main from "../Main/Main";
import Page404 from "../Page404/Page404";
import { Route, Routes, useNavigate } from "react-router";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Movies/Preloader/Preloader";
import { api } from "../../utils/mainApi";

function App() {
  //стейт контекста.
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  //https://app.pachca.com/chats?thread_id=2247049 решение нашел тут.
  const [isLoading, setIsLoading] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);

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
      api
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const handlSetCurrentUser = (name, email) => {
    setCurrentUser(name, email);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    //логаут производится при помощи удаления всего из локального хранилища (в том числе и токена)
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <div className="app">
        {isLoading ? (
          <Preloader />
        ) : (
          <CurrentUserContext.Provider value={currentUser}>
            <Routes>
              <Route path="/" element={<Main loggedIn={loggedIn} />} />
              <Route
                path="/movies"
                element={
                  <ProtectedRouteElement element={Movies} loggedIn={loggedIn} />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRouteElement
                    element={Profile}
                    loggedIn={loggedIn}
                    handleLogout={handleLogout}
                    handlSetCurrentUser={handlSetCurrentUser}
                  />
                }
              />
              <Route path="*" element={<Page404 />} />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRouteElement
                    element={SavedMovies}
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
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
