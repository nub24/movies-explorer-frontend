import React, { useEffect, useState } from 'react'
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getMovies } from '../../utils/MoviesApi.js'
import { movieFilter } from '../../utils/movieFilter.js'
import Preloader from '../Preloader/Preloader.js'
import { createMovie, deleteMovie } from '../../utils/MainApi.js'

import {
  MAX_DURATION,
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  DESKTOP_CARDS_COUNT,
  DESKTOP_CARDS_PACK,
  LAPTOP_CARDS_COUNT,
  LAPTOP_CARDS_PACK,
  MOBILE_CARDS_COUNT,
  MOBILE_CARDS_PACK
} from '../../utils/constants.js'

function Movies({ width, savedMovies, setSavedMovies }) {
  const [movies, setMovies] = useState([])
  
  const [checkbox, setCheckbox] = useState(false)
  const [prevSearchQuery, setPrevSearchQuery] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [cardsAmount, setCardsAmount] = useState(0);
  const [addCardsPack, setAddCardsPack] = useState(0);
  const [cardsPage, setCardsPage] = useState(0)
  const cardsCount = cardsAmount + addCardsPack * cardsPage
  
  const queryData = localStorage.getItem('queryData');
  
  let filteredMovies = JSON.parse(queryData)?.filteredMovies || [];
  let filteredShortMovies = JSON.parse(queryData)?.filteredShortMovies || [];
  let allMovies = localStorage.getItem('allMoviesData');

  useEffect(() => {
    if (width > DESKTOP_WIDTH) {
      setCardsAmount(DESKTOP_CARDS_COUNT);
      setAddCardsPack(DESKTOP_CARDS_PACK)
    } else if (width <= DESKTOP_WIDTH && width >= MOBILE_WIDTH) {
        setCardsAmount(LAPTOP_CARDS_COUNT);
        setAddCardsPack(LAPTOP_CARDS_PACK)
    } else {
      setCardsAmount(MOBILE_CARDS_COUNT);
      setAddCardsPack(MOBILE_CARDS_PACK)
    }
}, [width])

const removeMoviesData = () => {
  localStorage.removeItem('allMoviesData')
}

// сохраняем данные чекбокса в локалсторадж
useEffect(() => {
  if(queryData) {
    const newQueryData = JSON.parse(queryData);
    newQueryData.checkbox = checkbox
    localStorage.setItem('queryData', JSON.stringify(newQueryData))
  }
}, [checkbox, queryData])


//получаем данные о строке и состоянии чекбокса
useEffect(() => {
  if(queryData) {
    setPrevSearchQuery(JSON.parse(queryData).searchQuery)
    setCheckbox(JSON.parse(queryData).checkbox)
  }
}, [] )



useEffect(() => {
  window.addEventListener('beforeunload', removeMoviesData);
  return () => {
    window.removeEventListener('beforeunload', removeMoviesData)
  }
}, [])

  const submitHandler = async (checkbox, searchQuery ) => {
    try {
      setIsLoading(true)
      if(!allMovies) {
        const allMoviesData = await getMovies()
        localStorage.setItem('allMoviesData', JSON.stringify(allMoviesData))
        allMovies = localStorage.getItem('allMoviesData')
      }
      filteredMovies = movieFilter(searchQuery, JSON.parse(allMovies))
      filteredShortMovies = filteredMovies.filter(movie => movie.duration <= MAX_DURATION)
      
      const queryData = {
        filteredMovies,
        filteredShortMovies,
        searchQuery,
        checkbox
      }

      setCardsPage(0)
      localStorage.setItem('queryData', JSON.stringify(queryData))

      if(checkbox) {
        setMovies(filteredShortMovies.slice(0, cardsAmount))
      } else {
        setMovies(filteredMovies.slice(0, cardsAmount))
      }
      setIsLoading(false)

    } catch (err) {
      setMovies([])
    }
  }

useEffect(() => {
  if (checkbox) {
    setMovies(filteredShortMovies.slice(0, cardsCount))
  } else {
    setMovies(filteredMovies.slice(0, cardsCount))
  }
}, [checkbox, cardsCount])

const moreButtonHandler = () => {
  setCardsPage(prev => prev + 1)
}

const MoreBtn = () => (
  <button
    className='movies__more-btn'
    type='button'
    onClick={moreButtonHandler}
    >Ещё
  </button>
)

const saveMovie = (movie, likeHandler) => {
  
  createMovie(movie)
  .then((newSavedMovie) => {
    setSavedMovies([...savedMovies, newSavedMovie])
    likeHandler(true)
  })
  .catch(err => console.log(err))
}

const deleteMovieFromSaved = (movieId, likeHandler) => {
  const findedMovie = savedMovies.find(movie => movie.movieId === movieId)
  const idInSaved = findedMovie._id

  deleteMovie(idInSaved, likeHandler)
  .then(() => {
    likeHandler(false)
    setSavedMovies((state) => state.filter((m) => m._id !== idInSaved))
  })
  .catch(err => console.log(err))
}

  return (
    <section className='movies'>
        <SearchForm
          submitHandler={submitHandler}
          checkbox={checkbox}
          prevSearchQuery={prevSearchQuery}
          setCheckbox={setCheckbox}
          />
        {
          isLoading ? <Preloader /> : (
            <>
              <MoviesCardList 
                moviesArr={movies} 
                savedMovies={savedMovies}
                onSaveHandler={saveMovie}
                onDeleteHandler={deleteMovieFromSaved}
            />
              {checkbox 
                ? cardsCount < filteredShortMovies.length && <MoreBtn />
                : cardsCount < filteredMovies.length && <MoreBtn />}
            </>
          )
        }
        {
          movies.length === 0 && queryData && !isLoading  && <p>Ничего не найдено</p>
        }
        
    </section>
  )
}

export default Movies