import React from 'react'
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

import { savedMoviesArr } from '../../utils/constants';

function SavedMovies() {
  return (
    <section className='savedMovies'>
      <SearchForm />
      <MoviesCardList moviesArr={savedMoviesArr}/>
    </section>
  )
}

export default SavedMovies