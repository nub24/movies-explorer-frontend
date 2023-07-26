import React from 'react'
import { useState, useEffect } from 'react';
import './Techs.css'

function Techs() {

    const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']

    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
        setWidth(document.documentElement.clientWidth)    
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  const techWidthStyle = {
    width: width,
  } 

  return (
    <section className='techs' style={techWidthStyle} id='technologies'>
        <p className='techs__title'>Технологии</p>
        <div className='techs__textblock'>
            <h3 className='techs__textblock-title'>7 технологий</h3>
            <p className='techs__textblock-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <ul className='techs__list'>
            {technologies.map(item => {
                return(
                <li key={item} className='techs__item'>
                    {item}
                </li>
                )
            })}
        </ul>
    </section>
  )
}

export default Techs