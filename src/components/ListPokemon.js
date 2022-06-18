import React, { useContext } from 'react'
import { Grid, Paper } from '@mui/material'
import { ItemName } from '../assets/styles/ItemName.styled'
import { IdPoke } from '../assets/styles/IdPoke.styled'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'
import { useNavigate } from 'react-router-dom'
import { PokemonListContext } from '../context/ListContext/PokemonListContext'

const ListPokemon = ({ itemPoke, imgPokemon, types, id }) => {
   let navigate = useNavigate()

   const clickToDetail = () => {
      navigate('../pokemondetail/ability', { state: itemPoke })
   }

   return (
      <Grid item xs={12} lg={3} key={id}>
         <Paper
            elevation={3}
            sx={{
               width: '200px',
               height: '200px',
               margin: '0 auto',
               position: 'relative',
            }}
         >
            <ImageBox onClick={clickToDetail} type={types.name}>
               <IdPoke>{itemPoke.id}</IdPoke>
               <Image src={imgPokemon} alt={itemPoke.name} />
               <ItemName>{itemPoke.name}</ItemName>
            </ImageBox>
         </Paper>
      </Grid>
   )
}

export default ListPokemon
