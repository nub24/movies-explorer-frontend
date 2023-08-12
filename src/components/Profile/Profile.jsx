import React, { useContext, useEffect, useState } from 'react'
import './Profile.css';
import Form from '../Form/Form';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import{ useFormAndValidation } from '../../hooks/useFormAndValidation'


function Profile({
  onUpdateProfile,
  formError,
  onSignOut
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser)
    }
  }, [currentUser, resetForm])

  useEffect(() => {
    formError ? setEditMode(true) : setEditMode(false)
  }, [formError])

  function handleSubmit(e) {
    e.preventDefault();
    
    onUpdateProfile({
      email: values.email.trim(),
      name: values.name.trim()
    })
  }

  return (
    <section className='profile'>
        <Form
          name='profile'
          title={`Привет, ${currentUser.name}`}
          btnText = 'Сохранить'
          isValid={isValid}
          editMode={editMode}
          setEditMode= {setEditMode}
          handleSubmit={handleSubmit}
          errorText={formError}
          onSignOut={onSignOut}
        >
        <fieldset className='form__fieldset form__fieldset_profile'>
            <label className='form__label-profile'>
              Имя
              <input
              className={errors.name
                ? `form__input form__input_profile form__input_error`
                : `form__input form__input_profile`}
              required
              type='text'
              minLength={2}
              maxLength={30}
              placeholder='Имя'
              autoComplete='off'
              name='name'
              value={values.name || ''}
              onChange={handleChange}
              disabled={!editMode}
              />
              <span className={`
                form__validation-error
                form__validation-error_profile
                ${!isValid ? 'form__validation-error_visible' : ''}
              `}>
                {errors.name}
              </span>
            </label>

            <div className='form__divider'></div>

            <label className='form__label-profile'>
              E-mail
              <input
              className={errors.email
                ? `form__input form__input_profile form__input_error`
                : `form__input form__input_profile`}
              name='email'
              type='email'
              placeholder='E-mail'
              autoComplete='off'
              disabled={!editMode}
              required
              value={values.email || ''}
              onChange={handleChange}
              />
              <span span className={`
                form__validation-error
                form__validation-error_profile
                ${!isValid ? 'form__validation-error_visible' : ''}
              `}>
                {errors.email}
              </span>
            </label>
        </fieldset>
            
        </Form>
     </section>
  )
}

export default Profile