class MoviesApi {
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

  getMovies() {
    return fetch(this._baseUrl + "/beatfilm-movies", {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._returnResponse);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    // "Authorization": `Bearer ${token}`,
    // "Content-Type": "application/json",
  },
});
