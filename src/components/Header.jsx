import React from 'react'
import lightImage from '../images/bg-desktop-light.jpg'
import darkImage from '../images/bg-desktop-dark.jpg'
import './header.css'
import NewTask from './NewTask'

const Header = ({isDark, handleClickDarkMode}) => {
  return (
    <>
    <div className='header' style={{backgroundImage: isDark ? `url(${darkImage})` : `url(${lightImage})`}}>
      <NewTask isDark={isDark} handleClickDarkMode={handleClickDarkMode}/>
    </div>
    </>
  )
}

export default Header