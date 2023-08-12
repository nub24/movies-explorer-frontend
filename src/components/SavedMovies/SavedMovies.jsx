import React, { useEffect, useState } from 'react'
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { deleteMovie } from '../../utils/MainApi'
import { movieFilter } from '../../utils/movieFilter.js'

import { MAX_DURATION } from '../../utils/constants.js'

function SavedMovies({ savedMovies, setSavedMovies }) {
  const [moviesForRender, setMoviesForRender] = useState(savedMovies);
  const [checkbox, setCheckbox] = useState(false)

useEffect(() => {
  setMoviesForRender(savedMovies)

  if(checkbox) {
    setMoviesForRender(moviesForRender.filter(movie => movie.duration <= MAX_DURATION))
  } else {
    setMoviesForRender(savedMovies)
  }

}, [checkbox])

const removeMovie = (movieId, likeHandler) => {
  deleteMovie(movieId)
  .then(() => {
    likeHandler(false)
    setSavedMovies((state) => state.filter((m) => m._id !== movieId));
    setMoviesForRender((state) => state.filter((m) => m._id !== movieId));
  })
  .catch(err => console.log(err))
}

const submitHandler = (checkbox, searchQuery ) => {
    
      const filteredMovies = movieFilter(searchQuery, savedMovies)
      const filteredShortMovies = filteredMovies.filter(movie => movie.duration <= MAX_DURATION)
      
      
      if(checkbox) {
        setMoviesForRender(filteredShortMovies)
      } else {
        setMoviesForRender(filteredMovies)
      }    
  }

  
  return (
    <section className='savedMovies'>
      <SearchForm
        submitHandler={submitHandler}
        checkbox={checkbox}
        setCheckbox={setCheckbox}/>
      <MoviesCardList
        moviesArr={moviesForRender}
        savedMovies={savedMovies}
        onDeleteHandler={removeMovie}
        />
      {
          moviesForRender.length === 0 && <p>Ничего не найдено</p>
      }
    </section>
  )
}

export default SavedMovies