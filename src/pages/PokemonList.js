import React, { useEffect, useContext } from 'react'
import Grid from '@mui/material/Grid'
import ListPokemon from '../components/ListPokemon'
import { Button } from '../assets/styles/Button.styled'
import { PokemonListContext } from '../context/ListContext/PokemonListContext'
import { TitlePage } from '../assets/styles/TitlePage.styled'

const PokemonList = () => {
   let ctxPokemon = useContext(PokemonListContext)
   let displayPokemon

   useEffect(() => {
      ctxPokemon.catchPokemon()
      ctxPokemon.setIsClick(false)
   }, [])

   displayPokemon = ctxPokemon.itemPokemon.map((itemPoke) => {
      let imgPokemon = itemPoke.sprites.other.dream_world.front_default
      return (
         <React.Fragment key={itemPoke.id}>
            <ListPokemon
               itemPoke={itemPoke}
               imgPokemon={imgPokemon}
               types={itemPoke.types[0].type}
            />
         </React.Fragment>
      )
   })

   return (
      <>
         <TitlePage>list pokemon</TitlePage>
         <Grid container>
            <Grid container lg={12} justifyContent="center" spacing={2}>
               {displayPokemon}
               {!ctxPokemon.loading ? (
                  <Button onClick={ctxPokemon.catchPokemon}>
                     Load More Pokemon
                  </Button>
               ) : (
                  'loading'
               )}
            </Grid>
         </Grid>
      </>
   )
}

export default PokemonList
