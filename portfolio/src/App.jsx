import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
function App() {
  const [theme, setTheme] = useState(`dark`)

  return (
    <div className={`${theme === `dark`?"bg-black":'#fff'}`}>
      <Home theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
