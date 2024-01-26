import React from 'react'

import './Navbar.css';
const Navbar = () => {
  return (
    <>
        <nav id='nav'>
        <ul className='url'>
            <li><a href='#inicio'> INICIO </a></li>
            <li><a href='#sobremi'> SOBRE MI</a></li>
            <li><a href='#skills'> SKILLS</a></li>
            <li><a href='#curriculum'> CURRICULUM</a></li>
            <li><a href='#portafolio'> PORTAFOLIO</a></li>
            <li><a href='#contacto'> CONTACTO</a></li>
            
        </ul>
    </nav>

    <div className='nav-responsibe'>
        <i class="fa-solid fa-bars"></i>
    </div>
    </>
    
   
    
    
  )
}

export default Navbar
