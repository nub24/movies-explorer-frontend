import React from 'react'
import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
        <p className='portfolio__title'>Портфолио</p>
        <ul className='portfolio__elements-wrapper'>
            <li className='portfolio__element'>
                <p className='portfolio__element-title'>Статичный сайт</p>
                <Link 
                    className='portfolio__element-link'
                    to={'https://nub24.github.io/how-to-learn'}
                    target='_blank'
                    >↗
                </Link>
            </li>
            <li className='portfolio__element'>
                <p className='portfolio__element-title'>Адаптивный сайт</p>
                <Link
                    className='portfolio__element-link'
                    to={'https://nub24.github.io/russian-travel'}
                    target='_blank'>↗
                </Link>
            </li>
            <li className='portfolio__element'>
                <p className='portfolio__element-title'>Одностраничное приложение</p>
                <Link
                    className='portfolio__element-link'
                    to={'https://nub24.github.io/mesto'}
                    target='_blank'>↗
                </Link>
            </li>
        </ul>
    </section>
  )
}

export default Portfolio