import { Grid, Paper } from '@mui/material'
import React, { useContext } from 'react'

import { Button } from '../assets/styles/Button.styled'
import { ImageDetailed } from '../assets/styles/ImageDetailed.styled'
import { Text } from '../assets/styles/TextImage.styled'
import Stack from '@mui/material/Stack'
import ButtonMUI from '@mui/material/Button'
import { Outlet, NavLink } from 'react-router-dom'
import { PokemonDetailContext } from '../context/DetailContext/PokemonDetailContext'
import InputChangeName from '../components/InputChangeName'
import { TitlePage } from '../assets/styles/TitlePage.styled'

const PokemonDetail = () => {
   let ctxDetail = useContext(PokemonDetailContext)
   if (ctxDetail.isClick) {
      return <InputChangeName state={ctxDetail.location.state} />
   }

   return (
      <>
         {ctxDetail.location.state ? (
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
                        <ImageDetailed src={ctxDetail.imgPokemon} />
                        <Text>{ctxDetail.namePokemon}</Text>
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
                              state={ctxDetail.location.state}
                              style={({ isActive }) =>
                                 !isActive ? ctxDetail.activeStyle : undefined
                              }
                           >
                              <ButtonMUI variant="outlined">Ability</ButtonMUI>
                           </NavLink>
                           <NavLink
                              to="/pokemondetail/stats"
                              state={ctxDetail.location.state}
                              style={({ isActive }) =>
                                 !isActive ? ctxDetail.activeStyle : undefined
                              }
                           >
                              <ButtonMUI variant="outlined">Stats</ButtonMUI>
                           </NavLink>
                           <NavLink
                              to="/pokemondetail/types"
                              state={ctxDetail.location.state}
                              style={({ isActive }) =>
                                 !isActive ? ctxDetail.activeStyle : undefined
                              }
                           >
                              <ButtonMUI variant="outlined">Types</ButtonMUI>
                           </NavLink>
                        </Stack>

                        <Outlet />
                     </Paper>
                  </Grid>
               </Grid>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button catch onClick={ctxDetail.handleCatch}>
                     Catch
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
