import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ moviesArr }) {
  
  return (
    <section className='moviesCardList'>
        <ul className='moviesCardListWrapper'>
            {moviesArr.map((movie, i) => {
              return (
                <li 
                  className='moviesCardList__item'
                  key={i}
                  >
                  <MoviesCard
                    img={movie.img}
                    name={movie.name}
                    duration={movie.duration}
                  />
                </li>
               )
            })}
        </ul>

        <button
          className='moviesCardList__more-btn'
          type='button'
          >Ещё
        </button>
        
    </section>
  )
}

export default MoviesCardList