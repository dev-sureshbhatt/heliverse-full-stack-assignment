import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Team from './pages/Team'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'
import ViewTeams from './pages/ViewTeams'


function App() {
  return (

    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/create-team' element={<Team />} />
      <Route path='/view-teams' element={<ViewTeams />} />
    </Routes>
    </BrowserRouter>
    </Provider>
    

  )
}

export default App