import React, { useState } from 'react'
import { Grid, Paper } from '@mui/material'
import { ItemName } from '../assets/styles/ItemName.styled'
import { IdPoke } from '../assets/styles/IdPoke.styled'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'
import { useNavigate } from 'react-router-dom'

const ListPokemon = ({ itemPoke, imgPokemon }) => {
   let navigate = useNavigate()

   const clickToDetail = (item) => {
      navigate('../pokemondetail', { state: itemPoke })
   }

   return (
      <Grid item xs={12} lg={3} key={itemPoke.name}>
         <Paper
            elevation={3}
            sx={{
               width: '200px',
               height: '200px',
               margin: '0 auto',
               position: 'relative',
            }}
         >
            <ImageBox onClick={clickToDetail}>
               <IdPoke>{itemPoke.id}</IdPoke>
               <Image src={imgPokemon} alt={itemPoke.name} />
               <ItemName>{itemPoke.name}</ItemName>
            </ImageBox>
         </Paper>
      </Grid>
   )
}

export default ListPokemon
