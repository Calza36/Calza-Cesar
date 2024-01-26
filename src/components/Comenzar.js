import React from 'react'
import avatar from '../assets/avatar.png'

import './Comenzar.css';

const Comenzar = () => {
  return (
    <div id= 'inicio' className='inicio'>
        <div className='contenido-banner'>
            <div className='contenedor-img'>
                <img src={avatar} alt='Avatar'/>
            </div>
            <h1>NICK PEREZ</h1>
            <h2>Ingeniero de Software - Experto UI/UX</h2>
            <div className='redes'>
                <a href='#'><i class="fa-brands fa-facebook"></i></a>
                <a href='#'><i class="fa-brands fa-twitter"></i></a>
                <a href='#'><i class="fa-brands fa-skype"></i></a>
                <a href='#'><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>

    </div>
  )
}

export default Comenzar