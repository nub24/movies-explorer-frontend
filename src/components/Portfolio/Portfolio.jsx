import React from 'react'
import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__links'>
            <li className='portfolio__element'>
                <Link
                    className='portfolio__link'
                    to={'https://nub24.github.io/how-to-learn'}
                    target='_blank'>
                    <p className='portfolio__element-title'>Статичный сайт</p>
                    <div className='portfolio__element-arrow'></div>
                </Link>                
            </li>
            <li className='portfolio__element'>
                <Link
                    className='portfolio__link'
                    to={'https://nub24.github.io/russian-travel'}
                    target='_blank'>
                    <p className='portfolio__element-title'>Адаптивный сайт</p>
                    <div className='portfolio__element-arrow'></div>
                </Link>  
            </li>
            <li className='portfolio__element'>
                <Link
                    className='portfolio__link'
                    to={'https://nub24.github.io/mesto'}
                    target='_blank'>
                    <p className='portfolio__element-title'>Одностраничное приложение</p>
                    <div className='portfolio__element-arrow'></div>
                </Link>  
            </li>
        </ul>
    </section>
  )
}

export default Portfolio