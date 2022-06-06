import { Container, Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import { IdPoke } from '../assets/styles/IdPoke.styled'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'
import { useLocation } from 'react-router-dom'
import { useIndexedDB } from 'react-indexed-db'
import { Button } from '../assets/styles/Button.styled'
import { ImageDetailed } from '../assets/styles/ImageDetailed.styled'
import InputChangeName from '../components/InputChangeName'
import { Text } from '../assets/styles/TextImage.styled'
import Stack from '@mui/material/Stack';
import ButtonMUI from '@mui/material/Button';
import { Outlet, Link } from 'react-router-dom'
import AbilityPokemon from './../components/AbilityPokemon'

const PokemonDetail = ({ itemPoke }) => {
   const [isClick, setIsClick] = useState(false)

   const { add } = useIndexedDB('pokemonStorage')

   let location = useLocation()

   let idPokemon = location.state?.id
   let namePokemon = location.state?.name
   let imgPokemon = location.state?.sprites.other.dream_world.front_default

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

   if (isClick) {
      return (
         <InputChangeName state={location.state} />
      )

   }

   return (

      <>
         {location.state ? (
            <>
               <Grid container spacing={2} >
                  <Grid item xs={4} >
                     <Paper sx={{
                        height: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}>
                        <ImageDetailed src={imgPokemon} />
                        <Text>{namePokemon}</Text>
                     </Paper>
                  </Grid>
                  <Grid item xs={8} >
                     <Paper sx={{ height: '300px', padding: '20px', boxSizing: 'border-box' }}>
                        <Stack spacing={2} direction="row" justifyContent='center'>
                           <Link to='/pokemondetail/ability' state={location.state}>
                              <ButtonMUI variant="outlined">Ability</ButtonMUI>
                           </Link>
                           <Link to='/pokemondetail/stats' state={location.state}>
                              <ButtonMUI variant="outlined">Stats</ButtonMUI>
                           </Link>
                           <Link to='/pokemondetail/types' state={location.state}>
                              <ButtonMUI variant="outlined">Types</ButtonMUI>
                           </Link>
                        </Stack>

                        <Outlet />
                     </Paper>
                  </Grid>
               </Grid>
               <Button onClick={handleCatch} absolute>
                  Catch
               </Button>
            </>
         ) : 'nanti dulu'}
      </>
   )
}

export default PokemonDetail
