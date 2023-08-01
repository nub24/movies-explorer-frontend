import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'

function Register() {

  return (
    <section className='register'>
      <Link to={'/'}>
        <div className="register__logo"></div>
      </Link>

      <Form
        name='register'
        title='Добро пожаловать!'
        btnText = 'Зарегистрироваться'
        >
        <fieldset className='form__fieldset'>
          <label className='form__label'>
            Имя
            <input
              className='form__input'
              required
              autoComplete='off'
              type='text'
              minLength={2}
              maxLength={30}
              placeholder='Имя'
              name='name'
             />
             <span className='form__validation-error form__validation-error_visible name-error'>
                Тут будет ошибка имени
             </span>
          </label>

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
              maxLength={8}
              name='password'
              placeholder='Пароль'
             />
             <span className='form__validation-error form__validation-error_visible password-error'>
                Тут будет ошибка пароля
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
