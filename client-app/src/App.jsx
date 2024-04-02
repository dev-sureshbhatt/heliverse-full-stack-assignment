import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Team from './pages/Team'
import Navbar from './components/Navbar'


function App() {
  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/team' element={<Team />} />
    </Routes>
    </BrowserRouter>
    

  )
}

export default App