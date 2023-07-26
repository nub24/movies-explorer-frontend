import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
        <p className='footer__detail'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__container'>
            <p className='footer__date'>{`© ${currentYear}`}</p>
            <div className='footer__links-wrapper'>
                <Link 
                  className='footer__link' 
                  to={'https://practicum.yandex.ru'}
                  target='_blank'>
                  Яндекс.Практикум
                </Link>
                <Link 
                  className='footer__link'
                  to={'https://github.com/'}
                  target='_blank'
                  >
                  Github
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer