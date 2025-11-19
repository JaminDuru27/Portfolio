import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
import { AnimatePresence } from 'framer-motion'
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
      <AnimatePresence exitBeforeEnter>
        <Routes>
        <Route
        path='/'
        element={
        <Home theme={theme} setTheme={setTheme}/>
        }
        ></Route>
        <Route
        path='/About'
        element={
          <About theme={theme} setTheme={setTheme}/>
        }
        ></Route>
        <Route
        path='/Services'
        element={
          <Services theme={theme} setTheme={setTheme}/>
        }
        ></Route>
        <Route
        path='/Contact'
        element={
          <Contact theme={theme} setTheme={setTheme}/>
        }
        ></Route>
      </Routes>
      </AnimatePresence>
      </BrowserRouter>
    </div>
  )
}

export default App
