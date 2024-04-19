import './Header.css';
import React from 'react'

const Header = (props) => {

  return (
    <header className='header'>
      <h2 className="header__title">{props.heading}</h2>
    </header>
  )
}

export default Header;