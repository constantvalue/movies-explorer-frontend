class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  //приватный метод с условной конструкцией, возвращающей реджект с текстом ошибки.
  _returnResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка" + res.status);
  }

  getSavedMovies() {
    return fetch(this._baseUrl + "/movies", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then(this._returnResponse);
  }

  updateUserInfo(name, email) {
    return fetch(this._baseUrl + "/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._returnResponse);
  }

  addCardOnServer(movie) {
    return fetch(this._baseUrl + "/movies", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._returnResponse);
  }

  deleteCard(movie) {
    return fetch(this._baseUrl + "/movies/" + movie._id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then(this._returnResponse);
  }
}

export const api = new Api({
  baseUrl: "http://127.0.0.1:3000",
  headers: {
    // "Authorization": `Bearer ${token}`,
    // "Content-Type": "application/json",
  },
});

// https://api.voronin.nomoredomainsrocks.ru
