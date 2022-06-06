import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import ListPokemon from '../components/ListPokemon'
import { Button } from '../assets/styles/Button.styled'
import axios from 'axios'

const PokemonList = () => {
   let baseAPI = 'https://pokeapi.co/api/v2/pokemon'
   let displayPokemon
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

   useEffect(() => {
      catchPokemon()
   }, [])


   displayPokemon = itemPokemon.map((itemPoke) => {
      let imgPokemon = itemPoke.sprites.other.dream_world.front_default
      return (
         <ListPokemon
            itemPoke={itemPoke}
            imgPokemon={imgPokemon}
            types={itemPoke.types[0].type}
         />
      )
   })




   return (
      <Grid container>
         <Grid container lg={12} justifyContent="center" spacing={2}>


            {displayPokemon}

            {!loading ? <Button onClick={catchPokemon}>Load More Pokemon</Button> : 'loading'}



         </Grid>
      </Grid>
   )
}

export default PokemonList
