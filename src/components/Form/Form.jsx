import React from 'react'
import './Form.css'
import { Link } from 'react-router-dom'

function Form({ 
  name,
  title,
  children,
  btnText,
  isValid,
  handleSubmit,
  errorText,
  editMode,
  setEditMode,
  onSignOut
 }) {
  const login = name === 'login'
  const profile = name === 'profile'
  
  const errorTextClassName = (
    `form__errortext ${errorText && 'form__errortext_visible'}`
  )

  return (
    <form className={`form form-${name}`} onSubmit={handleSubmit} noValidate>
      <h1 className={`form__header ${profile && 'form__header_profile'}`}>{title}</h1>

      {children}

      {
      (name === 'login' || name === 'register') &&

      <div className={`form__btn-wrapper ${login && 'form__btn-wrapper_login'}`}>
        <span className={errorTextClassName}>
          {errorText}
        </span>
        <button
          className='form__btn-submit'
          type='submit'
          disabled={!isValid}
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
          <button 
            className='profile__btn-exit'
            onClick={onSignOut}>
            Выйти из аккаунта
          </button>
        </div> : 
        <div className='profile__btn-save-wrapper'>
            <span className='form__errortext form__errortext_visible'>
              {errorText}
            </span>
            <button
              className='form__btn-submit'
              type='submit'
              disabled={!isValid}
              >Сохранить
            </button>
        </div>
      )}
    </form>
  )
}

export default Form