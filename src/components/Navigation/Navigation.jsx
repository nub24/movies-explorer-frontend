import React from 'react'
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
           <nav className="nav">
            <Link 
              className="nav__link"
              to={'/movies'}
              >
              Фильмы
            </Link>
            <Link 
              className="nav__link"
              to={'/saved-movies'}
              >
              Сохраненные фильмы
            </Link>
          </nav>
  )
}

export default Navigation