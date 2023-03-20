import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import BgmiFixture from './components/Fixture/BgmiFixture';
import CocFixture from './components/Fixture/CocFixture';
import MlFixture from './components/Fixture/MlFixture';
import GameCardList from './components/GameCard/GameCardList';
import HeroBanner from './components/HeroBanner/HeroBanner';
import NavBar from './components/NavBar/NavBar'
import TournamentCard from './components/TournamentCard/TournamentCard';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Setting from './components/Profile/Setting';
import Profile from './components/Profile/Profile';
import Loader from "./Loader";

const App = () => {
  const [ loaded, setLoaded ] = useState( false );
  useEffect( () => {
    let timer = setTimeout( () => setLoaded( true ), 2000 );
    return () => {
      clearTimeout( timer );
    };
  }, [] );
  return (
    <div className="app">
      {/* using a ternary operator to determine which component to display
    based on the loaded state. If loaded is false the Loader is rendered */}
      { !loaded ? (
        <Loader />
      ) : (
        <><NavBar /><Routes>
          <Route path="/" element={ <HeroBanner /> } />
          <Route path="/games" element={ <GameCardList /> } />
          <Route path="/tournament" element={ <TournamentCard /> } />
          <Route path="/bgmifixture" element={ <BgmiFixture /> } />
          <Route path="/cocfixture" element={ <CocFixture /> } />
          <Route path="/mlfixture" element={ <MlFixture /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/setting" element={ <Setting /> } />

          <Route path="/profile" element={ <Profile /> } />
        </Routes></>
      ) }
    </div>


  )
}

export default App