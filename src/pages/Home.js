import React, { useContext } from 'react'
import { Grid, Paper } from '@mui/material'
import { Image, ImageBox } from '../assets/styles/ImageBox.styled'
import { ItemName } from '../assets/styles/ItemName.styled'
import { IdPoke } from '../assets/styles/IdPoke.styled'

const Home = () => {
   return (
      <>
         <Grid container>
            <Grid container lg={12} justifyContent="center" spacing={2}>
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
                     <ImageBox>
                        <IdPoke>tes</IdPoke>

                        <ItemName>tes</ItemName>
                     </ImageBox>
                  </Paper>
               </Grid>
            </Grid>
         </Grid>
      </>
   )
}

export default Home
