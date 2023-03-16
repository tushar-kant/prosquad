import React from 'react'
import { Route, Routes } from "react-router-dom"
import BgmiFixture from './components/Fixture/BgmiFixture';
import CocFixture from './components/Fixture/CocFixture';
import MlFixture from './components/Fixture/MlFixture';
import GameCardList from './components/GameCard/GameCardList';
import HeroBanner from './components/HeroBanner/HeroBanner';
import NavBar from './components/NavBar/NavBar'
import TournamentCard from './components/TournamentCard/TournamentCard';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <HeroBanner /> } />
        <Route path="/games" element={ <GameCardList /> } />
        <Route path="/tournament" element={ <TournamentCard /> } />
        <Route path="/bgmifixture" element={ <BgmiFixture /> } />
        <Route path="/cocfixture" element={ <CocFixture /> } />
        <Route path="/mlfixture" element={ <MlFixture /> } />
      </Routes>
    </div>

  )
}

export default App