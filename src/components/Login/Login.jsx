import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'

function Login() {
  return (
    <section className='login'>
      <Link to={'/'}>
        <div className="login__logo"></div>
      </Link>

      <Form
        name='login'
        title='Рады видеть!'
        btnText = 'Войти'
      >


    <fieldset className='form__fieldset'>
          <label className='form__label'>
            E-mail
            <input
              className='form__input'
              required
              autoComplete='off'
              type='email'
              name='email'
              placeholder='E-mail'
             />
             <span className='form__validation-error form__validation-error_visible email-error'>
                Тут будет ошибка емэйла, которая не влезает в контейнер, точнее влезает, но мы сделаем так, чтобы не влезла ну давайте по приколу третью строку сделаем чтобы лайн-кламп проверить почему нет-то
             </span>
          </label>

          <label className='form__label'>
            Пароль
            <input
              className='form__input form__input_error'
              required
              type='password'
              minLength={4}
              maxLength={16}
              name='password'
              placeholder='Пароль'
             />
             <span className='form__validation-error form__validation-error_visible password-error'>
                Тут будет ошибка пароля
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