import React, { useState } from 'react'
import { Grid, Paper } from '@mui/material'
import { IdPoke } from '../assets/styles/IdPoke.styled'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'


const ListPokemon = ({ itemPoke, imgPokemon, pokeInfo }) => {
    return (
        <Grid item xs={12} lg={6} key={itemPoke.id} >
            <Paper elevation={3} sx={{ width: '200px', height: '200px', margin: '0 auto', position: 'relative' }}>
                <IdPoke>
                    {itemPoke.id}
                </IdPoke>
                <ImageBox onClick={() => pokeInfo(itemPoke)}>
                    <Image src={imgPokemon} alt={itemPoke.name} />
                </ImageBox>
            </Paper>
        </Grid>
    )
}

export default ListPokemon