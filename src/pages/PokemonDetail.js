import { Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import { IdPoke } from '../assets/styles/IdPoke.styled'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { useIndexedDB } from 'react-indexed-db'
import { Button } from '../assets/styles/Button.styled'

const PokemonDetail = ({ itemPoke }) => {
   const [isClick, setIsClick] = useState(false)
   const { add } = useIndexedDB('pokemonStorage')
   let location = useLocation()

   const handleCatch = () => {
      setIsClick(true)
      add({
         id: location.state.id,
         name: location.state.name,
         img: location.state.sprites.other.dream_world.front_default,
      }).then(() => {
         console.log('sukses')
      })
   }

   if (isClick) {
      return <input value={location.state.name} />
   }

   return (
      <>
         {!location.state ? (
            'belom ada info'
         ) : (
            <>
               <Grid item xs={12} lg={12}>
                  <Paper
                     elevation={3}
                     sx={{
                        width: '200px',
                        height: '200px',
                        margin: '0 auto',
                        position: 'relative',
                     }}
                  >
                     <IdPoke>{location.state.id}</IdPoke>
                     <ImageBox>
                        <Image
                           src={
                              location.state.sprites.other.dream_world
                                 .front_default
                           }
                           alt={location.state.name}
                        />
                     </ImageBox>
                  </Paper>
               </Grid>
               <Button onClick={handleCatch} absolute>
                  Catch
               </Button>
            </>
         )}
      </>
   )
}

export default PokemonDetail
