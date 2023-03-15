import React from 'react'
import { Route, Routes } from "react-router-dom"
import GameCardList from './components/GameCard/GameCardList';
import HeroBanner from './components/HeroBanner/HeroBanner';
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <HeroBanner /> } />
        <Route path="/games" element={ <GameCardList /> } />
      </Routes>
    </div>

  )
}

export default App