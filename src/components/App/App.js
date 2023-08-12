import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";

import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { routesWithHeader, routesWithFooter } from "../../utils/constants.js";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";

import NotFound from "../NotFound/NotFound.jsx";
import Profile from "../Profile/Profile.jsx";
import Register from "../Register/Register.jsx";
import Login from '../Login/Login.jsx'
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'
import useResize from "../../hooks/useResize";

import {
  register,
  authorize,
  checkToken,
  getUserInfo,
  updateProfile,
  getSavedMovies
 } from '../../utils/MainApi'

 
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formError, setFormError] = useState('')
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({})
  const [savedMovies, setSavedMovies] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  
  const headerRoutes = routesWithHeader.find((item) => {
    return item === location.pathname
  })

  const footerRoutes = routesWithFooter.find((item) => {
    return item === location.pathname
  })

  const navigate = useNavigate();
  const width = useResize()

  function handleRegistration(email, password, name) {
    register(email, password, name)
      .then(() => {
        handleAuthorization(email, password)
      })
      .catch(err => {
        if (err === 'Ошибка 409') {
          setFormError('Пользователь с таким email уже существует.')
        } else if (err) {
          setFormError('При регистрации пользователя произошла ошибка.')
        } else {
          setFormError('')
        }
        setTimeout(() => {
          setFormError('')
        }, 10000)
      })
  }

  function handleAuthorization(email, password) {
    authorize(email, password)
      .then(data => {
        setLoggedIn(true)
        localStorage.setItem('token', data.token);
        navigate('/movies')
      })
      .catch(err => {
        if (err === 'Ошибка 401') {
          setFormError('Вы ввели неправильный логин или пароль.')
        } else if (err) {
          setFormError('Ошибка авторизации или сервер недоступен.')
        } else {
          setFormError('')
        }
        setTimeout(() => {
          setFormError('')
        }, 10000)
      })
  }

  function handleUpdateProfile ({ email, name }) {
    setIsLoading(true)
    updateProfile({ email, name })
    .then((newData) => {
      setCurrentUser(newData)
      setFormError('Данные обновлены')
      setTimeout(() => {
          setFormError('')
      }, 3000)
    })
    .catch((err) => {
      if (err) {
          setFormError('Ошибка обновления данных профиля.')
      }
      setTimeout(() => {
          setFormError('')
      }, 10000)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  function onSignOut() {
    localStorage.removeItem('queryData')
    localStorage.removeItem('token')
    localStorage.removeItem('savedMovies')
    localStorage.removeItem('allMoviesData')
    setLoggedIn(false)
    navigate('/')
    setCurrentUser({
      email: '',
      name: ''
    })
  }

  useEffect(() => {
    if (loggedIn) {
      getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(`Ошибка получения данных пользователя: ${err}`))
    }
  }, [loggedIn])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      checkToken(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true)
          if(location.pathname === '/signup' || location.pathname === 'signin') {
            navigate('/movies')
          } else {
            navigate(location.pathname)
          }
        }

      })
    }
  }, [loggedIn])

  useEffect(() => {
    if(loggedIn) {
      getSavedMovies()
      .then((moviesData) => {
        const ownSavedMovies = moviesData.filter(
          (movie) => movie.owner._id === currentUser.userId
        )

        localStorage.setItem('savedMovies', JSON.stringify(ownSavedMovies))
        setSavedMovies(ownSavedMovies)
      })
      .catch((err) => console.log(err))
    }
  }, [currentUser.userId, setSavedMovies])  

  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="app">
        { headerRoutes && <Header loggedIn={loggedIn} />}
     
        <main className="app__layout">
          <Routes>
            <Route path="/movies" element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              width={width}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              />
            }/>

            <Route path="/saved-movies" element={
            <ProtectedRoute 
              element={SavedMovies}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              />
            }/>

            <Route path="/profile" element={
              <ProtectedRoute
                element={Profile}
                onUpdateProfile={handleUpdateProfile}
                formError={formError}
                loggedIn={loggedIn}
                onSignOut={onSignOut}
                isLoading={isLoading}
              />
            }/>
          
            <Route path="/" element={<Main />} />
          
            <Route 
              path="/signup" 
              element={
                <Register
                  onRegistration={handleRegistration}
                  formError={formError}
                />}
            />
          
            <Route
                path="/signin"
                element={
                  <Login
                    onAuthorization={handleAuthorization}
                    formError={formError} 
                  />}
            />

            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>

        {footerRoutes && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
