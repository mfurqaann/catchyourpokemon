import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { initDB } from 'react-indexed-db'
import { DBConfig } from './indexeddb/DBConfig'
import PokemonList from './pages/PokemonList'
import MyPokemonList from './pages/MyPokemonList'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'
import AbilityPokemon from './components/AbilityPokemon';
import { Container } from '@mui/material'
import StatsPokemon from './components/StatsPokemon'
import TypesPokemon from './components/TypesPokemon'


function App() {
   initDB(DBConfig)
   return (
      <Router>
         <Container>
            <Navbar />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="listpokemon" element={<PokemonList />} />
               <Route path="mypokemonlist" element={<MyPokemonList />} />
               <Route path="pokemondetail" element={<PokemonDetail />}>
                  <Route path="ability" element={<AbilityPokemon />} />
                  <Route path="stats" element={<StatsPokemon />} />
                  <Route path="types" element={<TypesPokemon />} />
               </Route>
            </Routes>
         </Container>
      </Router>
   )
}

export default App
