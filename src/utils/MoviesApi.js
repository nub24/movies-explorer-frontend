import { MOVIES_URL } from './constants'

const request = (options) => {
  const fetchAddress = `${MOVIES_URL}`;

  return fetch(fetchAddress, options)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
  })
}

export const getMovies = () => {
  return request ({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
}