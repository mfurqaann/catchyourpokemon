import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PokemonListContext } from './../ListContext/PokemonListContext'

const PokemonProvider = (props) => {
   let baseAPI = 'https://pokeapi.co/api/v2/pokemon'

   const [itemPokemon, setItemPokemon] = useState([])
   const [baseURL, setbaseUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
   const [loading, setLoading] = useState(false)

   const catchPokemon = async () => {
      try {
         setLoading(true)
         const response = await axios.get(baseURL)

         setbaseUrl(response.data.next)

         const showImage = (results) => {
            getDataPokemon(results)
         }

         showImage(response.data.results)
         setLoading(false)
      } catch (err) {
         console.log('error')
      }
   }

   const getDataPokemon = async (results) => {
      results.forEach(async (pokemon) => {
         const response = await axios.get(`${baseAPI}/${pokemon.name}`)

         setItemPokemon((prevValue) => [...prevValue, response.data])
         await itemPokemon.sort((a, b) => a.id - b.id)
         return itemPokemon
      })
   }

   const ListContext = {
      itemPokemon: itemPokemon,
      catchPokemon: catchPokemon,
      loading: loading,
   }

   return (
      <PokemonListContext.Provider value={ListContext}>
         {props.children}
      </PokemonListContext.Provider>
   )
}

export default PokemonProvider
