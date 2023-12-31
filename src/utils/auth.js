export const BASE_URL = "https://api.voronin.nomoredomainsrocks.ru";

const returnResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject("Ошибка" + res.status);
};

export const signUp = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(returnResponse);
};

export const signIn = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(returnResponse);
};

//проверяю токен и получаю информацию пользователя.
export const checkTokenValidity = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(returnResponse);
};
