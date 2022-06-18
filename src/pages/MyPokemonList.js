import React, { useEffect, useState } from 'react'
import { Grid, Paper } from '@mui/material/'
import { useIndexedDB } from 'react-indexed-db'
import { ItemName } from '../assets/styles/ItemName.styled'
import { IdPoke } from '../assets/styles/IdPoke.styled'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'
import { TitlePage } from '../assets/styles/TitlePage.styled'
const MyPokemonList = () => {
   const [mypoke, setMypoke] = useState([
      {
         id: '',
         name: '',
         img: '',
      },
   ])
   const { getAll } = useIndexedDB('pokemonStorage')

   useEffect(() => {
      getAll().then((pokemonitem) => setMypoke(pokemonitem))
   }, [])

   console.log(mypoke)

   let displayMypoke = mypoke.map((poke) => (
      <Grid item xs={12} lg={4} key={poke.id}>
         <Paper
            elevation={3}
            sx={{
               width: '200px',
               height: '200px',
               margin: '0 auto',
               position: 'relative',
            }}
         >
            <ImageBox type={poke.name}>
               <IdPoke>{poke.id}</IdPoke>
               <Image src={poke.img} alt={poke.name} />
               <ItemName>{poke.name}</ItemName>
            </ImageBox>
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
