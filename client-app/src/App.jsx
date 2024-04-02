import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Team from './pages/Team'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'


function App() {
  return (

    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/team' element={<Team />} />
    </Routes>
    </BrowserRouter>
    </Provider>
    

  )
}

export default App