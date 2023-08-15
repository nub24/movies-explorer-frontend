import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Form from '../Form/Form';
import{ useFormAndValidation } from '../../hooks/useFormAndValidation'

function Login({ onAuthorization, formError }) {
  const { values, handleChange, errors, isValid, setIsValid, resetForm } = useFormAndValidation();
  const [isDisabled, setIsDisabled] = useState(false)
  
    function handleSubmit(e) {
    e.preventDefault();
    onAuthorization(values.email.trim(), values.password);
    resetForm();
  }

  useEffect(() => {
    if(!values.email || !values.password) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [values.email, values.password])

  return (
    <section className='login'>
      <Link to={'/'}>
        <div className="login__logo"></div>
      </Link>

      <Form
        name='login'
        title='Рады видеть!'
        btnText = 'Войти'
        isValid={isValid}
        isDisabled={isDisabled}
        handleSubmit={handleSubmit}
        errorText={formError}
      >

        <fieldset className='form__fieldset'>
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
              pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
              placeholder='E-mail'
              value={values.email || ''}
              onChange={handleChange}
             />
             <span 
              className={`
                form__validation-error
                ${!isValid ? 'form__validation-error_visible' : ''}`}>
                {errors.email || ''}
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

      <span className='login__alternate-text'>
        Ещё не зарегистрированы?
          <Link 
            className='login__register-link'
            to={'/signup'}
            > Регистрация
          </Link>
      </span>
    </section>
  )
}

export default Login