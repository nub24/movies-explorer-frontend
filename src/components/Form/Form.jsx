import React, { useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'

const formSubmitError = 'Произошла ошибка.'

function Form({ name, title, children, btnText }) {
  const login = name === 'login'
  const profile = name === 'profile'
  const [editMode, setEditMode] = useState(false);

  return (
    <form className={`form form-${name}`}>
      <h1 className={`form__header ${profile && 'form__header_profile'}`}>{title}</h1>

      {children}

      {
      (name === 'login' || name === 'register') &&

      <div className={`form__btn-wrapper ${login && 'form__btn-wrapper_login'}`}>
        <span className='form__errortext form__errortext_visible'>
          {formSubmitError}
        </span>
        <button
          className='form__btn-submit'
          type='submit'
          >{btnText}
        </button>
      </div>
      }

      {profile && (!editMode ? <div className={`form__btn-wrapper ${profile && 'form__btn-wrapper_profile'}`}>
          <button
            type='button' 
            className='profile__btn-edit'
            onClick={() => setEditMode(true)}
            >Редактировать
          </button>
          <Link 
            className='profile__btn-exit'
            to={'/'}>
            Выйти из аккаунта
          </Link>
        </div> : 
        <div className='profile__btn-save-wrapper'>
            <span className='form__errortext form__errortext_visible'>
              При обновлении профиля произошла ошибка.
            </span>
            <button
              className='form__btn-submit'
              type='submit'
              onClick={() => setEditMode(false)}
              >Сохранить
            </button>
        </div>
      )}
    </form>
  )
}

export default Form