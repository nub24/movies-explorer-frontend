import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesArr, savedMovies, onSaveHandler, onDeleteHandler }) {
  return (
    <section className='moviesCardList '>
        <ul className='moviesCardListWrapper'>
            {moviesArr && moviesArr.map((movie) => {
              return (
                <li 
                  className='moviesCardList__item'
                  key={movie.id || movie._id}
                  >
                  <MoviesCard
                    movie={movie}
                    savedMovies={savedMovies}
                    onSaveHandler={onSaveHandler}
                    onDeleteHandler={onDeleteHandler}
                  />
                </li>
               )
            })}
        </ul>
    </section>
  )
}

export default MoviesCardList