import React from 'react'
import './AboutMe.css';
import photo from '../../images/photo.jpg';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className='aboutme' id='student'>
      <p className='aboutme__title'>Студент</p>
      <div className='aboutme__info-wrapper'>
        <div className='aboutme__info'>
          <div className='aboutme__about-wrapper'>
            <h3 className='aboutme__name'>Виталий</h3>
            <p className='aboutme__description'>Фронтенд-разработчик, 30 лет</p>
            <p className='aboutme__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <Link 
            className='aboutme__github-link'
            to={'https://github.com/nub24'}
            target='_blank'>Github
          </Link>
        </div>
        <img className='aboutme__photo' src={photo}/>
      </div>
    </section>
  )
}

export default AboutMe