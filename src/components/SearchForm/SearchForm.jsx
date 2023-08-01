import React from 'react'
import './SearchForm.css'

function SearchForm() {
  return (
    <section className='searchMovie'>
        <form 
            className='searchForm' 
            name='searchForm'
            noValidate>
            <fieldset className='searchForm__input-wrapper'>
                <input
                    className='searchForm__input'
                    type='search'
                    required
                    minLength={2}
                    maxLength={30}
                    placeholder='Фильм'/>
                <button 
                    type='submit'
                    className='searchForm__btn'>
                </button>
            </fieldset>

            <fieldset className='searchForm__checkbox-wrapper'>
                <label className='searchForm__checkbox-label'>
                    <input type='checkbox' className='searchForm__invisible-checkbox' />
                    <div className='searchForm__visible-checkbox'></div>
                    <p className='searchForm__description'>Короткометражки</p>
                </label>
            </fieldset>
        </form>
    </section>
  )
}

export default SearchForm