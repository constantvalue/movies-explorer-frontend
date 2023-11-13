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


  

  // updateAvatar(data) {
  //   return fetch(this._baseUrl + "/users/me/avatar", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       "Content-Type": "application/json",
  //     },
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       avatar: data.avatar,
  //     }),
  //   }).then(this._returnResponse);
  // }

  // addCardOnServer(data) {
  //   return fetch(this._baseUrl + "/cards", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: data.name,
  //       link: data.link,
  //     }),
  //   }).then(this._returnResponse);
  // }

  // deleteCard(card) {
  //   return fetch(this._baseUrl + "/cards/" + card._id, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       "Content-Type": "application/json",
  //     },
  //     method: "DELETE",
  //   }).then(this._returnResponse);
  // }

  // //с помощью тернарного оператора, объединили два метода в один.
  // changeLikeCardStatus(card, status) {
  //   return fetch(this._baseUrl + "/cards/" + card._id + "/likes", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       "Content-Type": "application/json",
  //     },
  //     //избегаем использование if else.
  //     method: status ? "DELETE" : "PUT",
  //   }).then(this._returnResponse);
  // }
}

export const api = new Api({
  baseUrl: "http://127.0.0.1:3000",
  headers: {
    // "Authorization": `Bearer ${token}`,
    // "Content-Type": "application/json",
  },
});


// https://api.voronin.nomoredomainsrocks.ru