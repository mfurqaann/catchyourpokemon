import { Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import { IdPoke } from '../assets/styles/IdPoke.styled'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'

const PokemonInfo = ({ pokeDetail }) => {

    return (
        <>
            {!pokeDetail ? "belom ada info" : (
                <Grid item xs={12} lg={6} >
                    <Paper elevation={3} sx={{ width: '200px', height: '200px', margin: '0 auto', position: 'relative' }}>
                        <IdPoke>
                            {pokeDetail.id}
                        </IdPoke>
                        <ImageBox >
                            <Image src={pokeDetail.sprites.other.dream_world.front_default} alt={pokeDetail.name} />
                        </ImageBox>
                    </Paper>
                </Grid>
            )}
        </>

    )
}

export default PokemonInfo