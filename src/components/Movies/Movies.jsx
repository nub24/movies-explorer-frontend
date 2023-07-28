import React from 'react'
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { moviesArr } from '../../utils/constants'


function Movies() {
  return (
    <section className='movies'>
        <SearchForm />
        <MoviesCardList moviesArr={moviesArr}/>
    </section>
  )
}

export default Movies