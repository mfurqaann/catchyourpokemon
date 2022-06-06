import React, { useEffect, useState } from 'react'
import { useIndexedDB } from 'react-indexed-db'

const MyPokemonList = () => {
   const [mypoke, setMypoke] = useState([])

   const { getAll } = useIndexedDB('pokemonStorage')

   useEffect(() => {
      getAll().then((pokemonitem) => setMypoke(pokemonitem))
   }, [])

   return (
      <div style={{ color: 'white', textTransform: 'capitalize' }}>
         {mypoke.map((item) => (
            <div>{item.name}</div>
         ))}
      </div>
   )
}

export default MyPokemonList
