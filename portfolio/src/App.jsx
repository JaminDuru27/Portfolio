import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
function App() {
  const [theme, setTheme] = useState(`dark`)

  return (
    <div 
    style={{transition:`.6s ease`}}
    className={`${theme === `dark`?"bg-black":'#fff'}`}>
      {/* <Home theme={theme} setTheme={setTheme}/> */}
      {/* <About theme={theme} setTheme={setTheme}/> */}
      {/* <Contact theme={theme} setTheme={setTheme}/> */}
      {/* <Services theme={theme} setTheme={setTheme} /> */}

      <BrowserRouter>
      <Routes>
        <Route
        path='/'
        element={<></>}
        ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
