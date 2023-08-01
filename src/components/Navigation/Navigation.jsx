import React from 'react'
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
           <nav className="nav">
            <ul className='nav__list'>
              <li className='nav__list-item'>
                <Link 
                  className="nav__link"
                  to={'/movies'}
                  >
                  Фильмы
                </Link>
              </li>
              <li>
                <Link 
                  className="nav__link"
                  to={'/saved-movies'}
                  >
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
            
            
          </nav>
  )
}

export default Navigation