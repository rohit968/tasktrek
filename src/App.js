import React, { useState } from 'react'
import Header from './components/Header'
import NewTask from './components/NewTask'
import './app.css'

const App = () => {

  const [isDark, setIsDark] = useState(false);

  const handleClickDarkMode = () => {
    setIsDark(prev => !prev)
  }



  return (
    <div style={{ backgroundColor: isDark ? '#252525' : 'white' }}>
      <Header isDark={isDark} handleClickDarkMode={handleClickDarkMode} />
    </div>
  )
}

export default App