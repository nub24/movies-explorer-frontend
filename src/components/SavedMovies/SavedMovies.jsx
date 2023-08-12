import React, { useEffect, useState } from 'react'
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { deleteMovie } from '../../utils/MainApi'
import { movieFilter } from '../../utils/movieFilter.js'

function SavedMovies({ savedMovies, setSavedMovies }) {
  const [moviesForRender, setMoviesForRender] = useState(savedMovies);
  const [checkbox2, setCheckbox2] = useState(false)

  useEffect(() => setMoviesForRender(savedMovies), [savedMovies]);

const removeMovie = (movieId, likeHandler) => {
  deleteMovie(movieId)
  .then(() => {
    likeHandler(false)
    setSavedMovies((state) => state.filter((m) => m._id !== movieId));
    setMoviesForRender((state) => state.filter((m) => m._id !== movieId));
  })
  .catch(err => console.log(err))
}

const submitHandler = (checkbox2, searchQuery ) => {
    
      const filteredMovies = movieFilter(searchQuery, savedMovies)
      const filteredShortMovies = filteredMovies.filter(movie => movie.duration <= 40)
      
      
      if(checkbox2) {
        setMoviesForRender(filteredShortMovies)
      } else {
        setMoviesForRender(filteredMovies)
      }    
  }

  
  return (
    <section className='savedMovies'>
      <SearchForm
        submitHandler={submitHandler}
        checkbox={checkbox2}
        setCheckbox={setCheckbox2}/>
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