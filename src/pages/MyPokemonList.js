import React, { useEffect, useState, useContext } from 'react'
import { Button, Grid, Paper } from '@mui/material/'
import { useIndexedDB } from 'react-indexed-db'
import { ItemName } from '../assets/styles/ItemName.styled'
import { IdPoke } from '../assets/styles/IdPoke.styled'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'
import { TitlePage } from '../assets/styles/TitlePage.styled'
import { PokemonListContext } from '../context/ListContext/PokemonListContext'
const MyPokemonList = () => {
   let ctxPokemon = useContext(PokemonListContext)

   const [mypoke, setMypoke] = useState([

   ])
   const { getAll } = useIndexedDB('pokemonStorage')

   useEffect(() => {
      getAll().then((pokemonitem) => setMypoke(pokemonitem))
   }, [])

   let displayMypoke = mypoke.map((poke) => (
      <Grid item xs={12} lg={4} key={poke.id} >
         <Paper
            onClick={() => ctxPokemon.getDetail(poke.id, poke.nickname)}
            type={poke.name}
            elevation={3}
            sx={{
               width: '200px',
               minHeight: '200px',
               margin: '0 auto',
               position: 'relative',
               display: 'flex',
               flexDirection: 'column'
            }}
         >
            <ImageBox >
               <IdPoke>{poke.id}</IdPoke>
               <Image src={poke.img} alt={poke.name} />
               <ItemName>{poke.nickname}</ItemName>
            </ImageBox>

            <Button sx={{ marginTop: '10px' }} color="error" variant="contained">Release</Button>
         </Paper>
      </Grid>
   ))

   return (
      <>
         <TitlePage>my pokemon</TitlePage>
         <TitlePage>mempunyai {mypoke.length} pokemon</TitlePage>
         <Grid container>
            <Grid container lg={12} justifyContent="center" spacing={2}>
               {displayMypoke}
            </Grid>
         </Grid>
      </>
   )
}

export default MyPokemonList
