import React from 'react'
import './NotFound.css'
import { Link, useNavigate } from 'react-router-dom'


function NotFound() {

const navigate = useNavigate();
const goBack = () => navigate(-1)

  return (
    <section className='notFound'>
        <div className='notFound__wrapper'>
            <h1 className='notFound__title'>404</h1>
            <p className='notFound__text'>Страница не найдена</p>
        </div>
        
        <Link className='notFound__link' to={goBack(-1)}>Назад</Link>
    </section>
  )
}

export default NotFound