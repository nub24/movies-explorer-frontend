import React, { useEffect, useState } from 'react'
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ img, name, duration }) {
  const formattedDuration = `${Math.trunc(duration / 60)}ч ${duration % 60}м`

  const [savedFilm, setSavedFilm] = useState(false);
  const handleSavedFilm = () => setSavedFilm(!savedFilm);

  console.log(savedFilm);

  const location =useLocation();

  useEffect(() => {
    if(location.pathname === '/saved-movies') {
      setSavedFilm(true)
    }
  },[location.pathname])

  const classMovieButton = (
    `${savedFilm && location.pathname === '/movies' ? 'movie__btn movie__btn_saved' : 'movie__btn'}
    ${savedFilm && location.pathname === '/saved-movies' && 'movie__btn_delete'}
    ${!savedFilm && location.pathname === '/saved-movies' && 'movie__btn_hidden'}
    `
  )
  

  return (
    <div className='movie'>
        <img className='movie__img' alt={name} src={img}></img>
          <div className='movie__info'>
            <p className='movie__name'>{name}</p>
            <span className='movie__duration'>{formattedDuration}</span>
          </div>
        

        <button 
          className={classMovieButton} 
          onClick={handleSavedFilm}
          >{!savedFilm && 'Сохранить'}
        </button>
    </div>
  )
}

export default MoviesCard