import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import Form from '../Form/Form';
import{ useFormAndValidation } from '../../hooks/useFormAndValidation'

function Register({ onRegistration, formError }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    onRegistration(values.email.trim(), values.password.trim(), values.name.trim());
    resetForm();
  }

  useEffect(() => {
    if(!values.name || !values.email || !values.password) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [values.name, values.email, values.password])



  return (
    <section className='register'>
      <Link to={'/'}>
        <div className="register__logo"></div>
      </Link>

      <Form
        name='register'
        title='Добро пожаловать!'
        btnText = 'Зарегистрироваться'
        isValid={isValid}
        handleSubmit={handleSubmit}
        errorText={formError}
        isDisabled={isDisabled}
        >
        <fieldset className='form__fieldset'>
          <label className='form__label'>
            Имя
            <input
              className={errors.name
                ? `form__input form__input_error`
                : `form__input`}
              required
              autoComplete='off'
              type='text'
              minLength={2}
              maxLength={30}
              placeholder='Имя'
              name='name'
              value={values.name || ''}
              onChange={handleChange}
             />
             <span className={`
              form__validation-error
              ${!isValid ? 'form__validation-error_visible' : ''}`}>
                {errors.name || ''}
             </span>
          </label>

          <label className='form__label'>
            E-mail
            <input
              className={errors.email
                ? `form__input form__input_error`
                : `form__input`}
              required
              autoComplete='off'
              type='email'
              name='email'
              placeholder='E-mail'
              pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
              value={values.email || ''}
              onChange={handleChange}
             />
             <span className={`
              form__validation-error
              ${!isValid ? 'form__validation-error_visible' : ''}`}>
              {errors.email}                
             </span>
          </label>

          <label className='form__label'>
            Пароль
            <input
              className={errors.password
                ? `form__input form__input_error`
                : `form__input`}
              required
              type='password'
              name='password'
              placeholder='Пароль'
              value={values.password || ''}
              onChange={handleChange}
             />
             <span className={`
              form__validation-error
              ${!isValid ? 'form__validation-error_visible' : ''}`}>
                {errors.password}
             </span>
          </label>
        </fieldset>      
      </Form>

      <span className='register__alternate-text'>
        Уже зарегистрированы?
          <Link 
            className='register__login-link'
            to={'/signin'}
            > Войти
          </Link>
      </span>
    </section>
  )
}

export default Register
