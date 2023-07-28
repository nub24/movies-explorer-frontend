import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ moviesArr }) {
  
  return (
    <section className='moviesCardList'>
        <div className='moviesCardListWrapper'>
            {moviesArr.map((movie) => {
              return (
                <MoviesCard
                img={movie.img}
                name={movie.name}
                duration={movie.duration}
               />
               )
            })}
        </div>

        <button className='moviesCardList__more-btn'>Ещё</button>
        
    </section>
  )
}

export default MoviesCardList