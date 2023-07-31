import React from 'react'
import './Profile.css';
import Form from '../Form/Form';

const profileData = {
  name: "Виталий",
  email: "pochta@yandex.ru"
}


function Profile() {
  return (
    <div className='profile'>
        <Form
          name='profile'
          title={`Привет, ${profileData.name}!`}
          btnText = 'Сохранить'
        >
        <fieldset className='form__fieldset form__fieldset_profile'>
            <label className='form__label_profile'>
              Имя
              <input 
              className='form__input form__input_profile' 
              value={profileData.name}
              required
              type='text'
              minLength={2}
              maxLength={30}
              disabled
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

            <label className='form__label_profile'>
              E-mail
              <input
              className='form__input form__input_profile'
              value={profileData.email}
              name='email'
              type='email'
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
     </div>
  )
}

export default Profile