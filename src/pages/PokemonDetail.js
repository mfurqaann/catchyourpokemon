import { Grid, Paper } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
import { Button } from '../assets/styles/Button.styled'
import { ImageDetailed } from '../assets/styles/ImageDetailed.styled'
import { Text } from '../assets/styles/TextImage.styled'
import Stack from '@mui/material/Stack'
import ButtonMUI from '@mui/material/Button'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { PokemonDetailContext } from '../context/DetailContext/PokemonDetailContext'
import InputChangeName from '../components/InputChangeName'
import { TitlePage } from '../assets/styles/TitlePage.styled'
import { PokemonListContext } from '../context/ListContext/PokemonListContext'
import { useIndexedDB } from 'react-indexed-db'

const PokemonDetail = () => {
   let location = useLocation()
   let state = location.state
   let ctxPokemon = useContext(PokemonListContext)
   const [detailPokemon, setDetailpokemon] = useState()
   const { getByID } = useIndexedDB('pokemonStorage')

   const PokemonDetail = {
      id: state.data?.id,
      name: state.data?.name,
      image: state.data?.sprites.other.dream_world.front_default
   }


   useEffect(() => {
      getByID(PokemonDetail.id).then(detail => setDetailpokemon(detail))
   }, [])

   if (ctxPokemon.isClick) {
      return <InputChangeName state={PokemonDetail} />
   }


   return (
      <>
         {location.state.data ? (
            <>
               <TitlePage>Detail Pokemon</TitlePage>
               <Grid container spacing={2}>
                  <Grid item xs={12} lg={4}>
                     <Paper
                        sx={{
                           height: '300px',
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           justifyContent: 'center',
                        }}
                     >
                        <ImageDetailed src={PokemonDetail.image} />
                        <Text>{state.nickname ? state.nickname : PokemonDetail.name}</Text>
                     </Paper>
                  </Grid>
                  <Grid item xs={12} lg={8}>
                     <Paper
                        sx={{
                           height: '300px',
                           padding: '20px',
                           boxSizing: 'border-box',
                        }}
                     >
                        <Stack
                           spacing={2}
                           direction="row"
                           justifyContent="center"
                        >
                           <NavLink
                              to="/pokemondetail/ability"
                              state={state}
                           // style={({ isActive }) =>
                           //    !isActive ? state.activeStyle : undefined
                           // }
                           >
                              <ButtonMUI variant="outlined">Ability</ButtonMUI>
                           </NavLink>
                           <NavLink
                              to="/pokemondetail/stats"
                              state={state}
                           // style={({ isActive }) =>
                           //    !isActive ? state.activeStyle : undefined
                           // }
                           >
                              <ButtonMUI variant="outlined">Stats</ButtonMUI>
                           </NavLink>
                           <NavLink
                              to="/pokemondetail/types"
                              state={state}
                           // style={({ isActive }) =>
                           //    !isActive ? state.activeStyle : undefined
                           // }
                           >
                              <ButtonMUI variant="outlined">Types</ButtonMUI>
                           </NavLink>
                        </Stack>

                        <Outlet />
                     </Paper>
                  </Grid>
               </Grid>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button catch onClick={ctxPokemon.handleCatch} >
                     {detailPokemon ? 'Release' : 'Catch'}
                  </Button>
               </div>
            </>
         ) : (
            'nanti dulu'
         )}
      </>
   )
}

export default PokemonDetail
