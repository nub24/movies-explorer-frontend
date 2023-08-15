import React, { useEffect, useState } from 'react'
import './MoviesCard.css';
import { Link, useLocation } from 'react-router-dom';
import { MOVIES_URL } from '../../utils/constants';

function MoviesCard({ movie, savedMovies, onSaveHandler, onDeleteHandler}) {
  const formattedDuration = `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`
  const srcImg = `https://api.nomoreparties.co/${movie.image.url}`

  const [savedFilm, setSavedFilm] = useState(false);

  const location =useLocation();

  useEffect(() => {
    if(location.pathname === '/saved-movies') {
      setSavedFilm(true)
    }
  },[location.pathname, savedFilm])

  const classMovieButton = (
    `${savedFilm && location.pathname === '/movies' ? 'movie__btn movie__btn_saved' : 'movie__btn'}
    ${location.pathname === '/saved-movies' && !savedFilm && 'movie__btn_hidden'}
    ${location.pathname === '/saved-movies' && savedFilm && 'movie__btn_delete'}
    `
  )

  const handleSaveMovie = () => {
    const movieInfo =  {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: 'https://api.nomoreparties.co/' + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: 'https://api.nomoreparties.co/' + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  }

    onSaveHandler(movieInfo, setSavedFilm)
  }

  const handleDeleteMovie = () => {
    onDeleteHandler(movie._id || movie.id, setSavedFilm)
  }

  useEffect(() => {
    const saved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id)
    
    if (saved) {
      setSavedFilm(true)
    }
  }, [savedMovies, movie.id])

  return (
    <div className='movie'>
        <Link className='movie__link' to={`${movie.trailerLink}`} target='_blank'>
          <img
          className='movie__img'
          alt={movie.nameRU}
          src={location.pathname === '/saved-movies' ? movie.image : srcImg}>
          </img>
        </Link>
        <div className='movie__info'>
            <h2 className='movie__name'>{movie.nameRU}</h2>
            <span className='movie__duration'>{formattedDuration}</span>
        </div>
        
        <button 
          className={classMovieButton}
          type='button'
          onClick={location.pathname === '/saved-movies'
            ? handleDeleteMovie
            : savedFilm
                ? handleDeleteMovie
                : handleSaveMovie
          }
          >{!savedFilm && 'Сохранить'}
        </button>
    </div>
  )
}

export default MoviesCard