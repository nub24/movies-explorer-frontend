import React, { useEffect, useState } from 'react'
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getMovies } from '../../utils/MoviesApi.js'
import { movieFilter } from '../../utils/movieFilter.js'
import Preloader from '../Preloader/Preloader.js'
import { createMovie, deleteMovie } from '../../utils/MainApi.js'

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
    if (width > 1140) {
      setCardsAmount(12);
      setAddCardsPack(3)
    } else if (width <= 1140 && width >= 708) {
        setCardsAmount(8);
        setAddCardsPack(2)
    } else {
      setCardsAmount(5);
      setAddCardsPack(2)
    }
}, [width])

const removeMoviesData = () => {
  localStorage.removeItem('allMoviesData')
}


useEffect(() => {
  if(queryData) {
    setPrevSearchQuery(JSON.parse(queryData).searchQuery)
    setCheckbox(JSON.parse(queryData).checkbox)
  }
}, [])

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
      filteredShortMovies = filteredMovies.filter(movie => movie.duration <= 40)
      
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