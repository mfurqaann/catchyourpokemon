import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import ListPokemon from './components/ListPokemon';
import PokemonInfo from './components/PokemonInfo';

function App() {
  let baseAPI = 'https://pokeapi.co/api/v2/pokemon'
  let displayPokemon;

  const [itemPokemon, setItemPokemon] = useState([]);
  const [baseURL, setbaseUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [pokeDetail, setPokeDetail] = useState();

  const catchPokemon = async () => {
    try {
      const response = await fetch(baseURL)
      const data = await response.json();

      setbaseUrl(data.next)

      const showImage = ((results) => {
        getDataPokemon(results)
      })

      showImage(data.results);

    } catch (err) {
      console.log('error');
    }
  }

  const getDataPokemon = async (results) => {
    results.forEach(async (pokemon) => {
      const response = await fetch(`${baseAPI}/${pokemon.name}`)
      const data = await response.json();
      setItemPokemon((prevValue) => [...prevValue, data])
      await itemPokemon.sort((a, b) => a.id - b.id)
      return itemPokemon
    })
  }


  useEffect(() => {
    catchPokemon();
  }, [])


  displayPokemon = itemPokemon.map((itemPoke, id) => {
    let imgPokemon = itemPoke.sprites.other.dream_world.front_default;
    return (
      <>
        <ListPokemon
          itemPoke={itemPoke}
          imgPokemon={imgPokemon}
          pokeInfo={pokeInfo => setPokeDetail(pokeInfo)}
        />

      </>
    )
  })


  return (
    <>
      <Container>
        <Navbar />
        <Grid container>
          <Grid container lg={6} justifyContent="center" spacing={2} sx={{ border: 'solid red' }} >
            {pokeDetail ? <PokemonInfo pokeDetail={pokeDetail} /> : (
              <>
                {displayPokemon}
                <button onClick={() => catchPokemon()}>Load More Pokemon</button>
              </>
            )}
            {/* // <Grid container lg={6} justifyContent="center" spacing={2} sx={{ border: 'solid red' }} >
          //   {displayPokemon}
          // </Grid>

          // <Grid container lg={6} justifyContent="center" spacing={2} sx={{ border: 'solid red' }} >
          //   <PokemonInfo pokeDetail={pokeDetail} />
          // </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
