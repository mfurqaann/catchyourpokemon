import React, { useContext } from 'react'
import { Grid, Paper } from '@mui/material'
import { ItemName } from '../assets/styles/ItemName.styled'
import { IdPoke } from '../assets/styles/IdPoke.styled'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'
import { useNavigate } from 'react-router-dom'
import { PokemonListContext } from '../context/ListContext/PokemonListContext'

const ListPokemon = ({ itemPoke, imgPokemon }) => {
   let ctxPokemon = useContext(PokemonListContext)

   const clickToDetail = (id) => {
      ctxPokemon.getDetail(id)
   }

   return (
      <Grid item xs={12} lg={3}>
         <Paper
            elevation={3}
            sx={{
               width: '200px',
               height: '200px',
               margin: '0 auto',
               position: 'relative',
            }}
         >
            <ImageBox onClick={() => clickToDetail(itemPoke.id)} type={itemPoke.types.name}>
               <IdPoke>{itemPoke.id}</IdPoke>
               <Image src={imgPokemon} alt={itemPoke.name} />
               <ItemName>{itemPoke.name}</ItemName>
            </ImageBox>
         </Paper>
      </Grid>
   )
}

export default ListPokemon
