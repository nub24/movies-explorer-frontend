import React, { useEffect } from 'react'
import './SearchForm.css'
import{ useFormAndValidation } from '../../hooks/useFormAndValidation'

function SearchForm({ submitHandler, checkbox, setCheckbox, prevSearchQuery }) {
const { values, setValues, handleChange, errors, isValid, resetForm } = useFormAndValidation()

function handleSubmit(e) {
    e.preventDefault();
    submitHandler(checkbox, values.search)

}

useEffect(() => {
    if (prevSearchQuery) {
        setValues({...values, 'search': prevSearchQuery})
    }
}, [prevSearchQuery, setValues])

const clickCheckbox = () => setCheckbox(!checkbox)

  return (
    <section className='searchMovie'>
        <form 
            className='searchForm' 
            name='searchForm'
            noValidate
            onSubmit={handleSubmit}
            >
            <fieldset className='searchForm__input-wrapper'>
                <input
                    className='searchForm__input'
                    type='search'
                    name='search'
                    required
                    maxLength={30}
                    placeholder='Фильм'
                    onChange={handleChange}
                    value={values.search || ''}
                    />
                <button 
                    type='submit'
                    disabled={ !isValid }
                    className='searchForm__btn'>
                </button>
            </fieldset>

            <fieldset className='searchForm__checkbox-wrapper'>
                <label className='searchForm__checkbox-label'>
                    <input
                        type='checkbox'
                        checked={checkbox}
                        className='searchForm__invisible-checkbox'
                        onChange={clickCheckbox}
                        />
                    <span className='searchForm__visible-checkbox'></span>
                    <span className='searchForm__description'>Короткометражки</span>
                </label>
            </fieldset>
        </form>
    </section>
  )
}

export default SearchForm