import React from 'react'
import './Profile.css';
import Form from '../Form/Form';

function Profile() {

  

  return (
    <section className='profile'>
        <Form
          name='profile'
          title={`Привет, Виталий!`}
          btnText = 'Сохранить'
        >
        <fieldset className='form__fieldset form__fieldset_profile'>
            <label className='form__label-profile'>
              Имя
              <input 
              className='form__input form__input_profile' 
              required
              type='text'
              minLength={2}
              maxLength={30}
              placeholder='Имя'
              autoComplete='off'
              name='name'
              />
              <span className='
                form__validation-error
                form__validation-error_visible
                form__validation-error_profile
                name-error'>
                Тут ошибка
              </span>
            </label>

            <div className='form__divider'></div>

            <label className='form__label-profile'>
              E-mail
              <input
              className='form__input form__input_profile'
              name='email'
              type='email'
              placeholder='E-mail'
              autoComplete='off'
              disabled
              required
              />
              <span className='
                form__validation-error
                form__validation-error_visible
                form__validation-error_profile
                email-error'>
                тут пока тоже ошибка но она настолько большая что при всём своём желании не помещается в контейнер. Ну и хрен с ней
              </span>
            </label>
        </fieldset>
            
        </Form>
     </section>
  )
}

export default Profile