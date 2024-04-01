import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Team from './pages/Team'


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/team' element={<Team />} />
    </Routes>
    </BrowserRouter>
    

  )
}

export default App