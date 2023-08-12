import { BASE_URL } from './constants'

const request = (url, options) => {
  const fetchAddress = `${BASE_URL}/${url}`;

  return fetch(fetchAddress, options)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
  })
}

export const register = (email, password, name) => {
    return request('signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name })
    })
}

export const authorize = (email, password) => {
    return request('signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
  })
}

export const checkToken = (token) => {
  return request('users/me', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  })
}

export const getUserInfo = () => {
  const token = localStorage.getItem('token')
  
  return request ('users/me', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  })
}

export const updateProfile = ({ email, name }) => {
  const token = localStorage.getItem('token')
  
  return request ('users/me', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({ email, name })
  })
}

export const createMovie = (movieData) => {
  const token = localStorage.getItem('token')

 return request('movies', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({ ...movieData })
  })
}

export const deleteMovie = (movieId) => {
  const token = localStorage.getItem('token')

  return request(`movies/${movieId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
  })
}

export const getSavedMovies = () => {
  const token = localStorage.getItem('token')
  
  return request ('movies', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  })
}
