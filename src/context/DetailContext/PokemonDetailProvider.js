import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useIndexedDB } from 'react-indexed-db'
import { PokemonDetailContext } from './PokemonDetailContext'

const PokemonDetailProvider = (props) => {
   const [isClick, setIsClick] = useState(false)
   const { add } = useIndexedDB('pokemonStorage')

   let location = useLocation()
   // id, name, img
   let idPokemon = location.state?.id
   let namePokemon = location.state?.name
   let imgPokemon = location.state?.sprites.other.dream_world.front_default

   let activeStyle = {
      textDecoration: 'none',
   }

   const handleCatch = () => {
      setIsClick(true)
      add({
         id: idPokemon,
         name: namePokemon,
         img: imgPokemon,
      }).then(() => {
         console.log('sukses')
      })


   }

   const DetailContext = {
      idPokemon: idPokemon,
      namePokemon: namePokemon,
      imgPokemon: imgPokemon,
      activeStyle: activeStyle,
      location: location,
      handleCatch: handleCatch,
      isClick: isClick,
      setIsClick: setIsClick,
   }

   return (
      <PokemonDetailContext.Provider value={DetailContext}>
         {props.children}
      </PokemonDetailContext.Provider>
   )
}

export default PokemonDetailProvider
