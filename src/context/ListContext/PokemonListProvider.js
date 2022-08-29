import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PokemonListContext } from './../ListContext/PokemonListContext'
import { useIndexedDB } from 'react-indexed-db'

const PokemonProvider = (props) => {
   let location = useLocation()
   let state = location.state


   let baseAPI = 'https://pokeapi.co/api/v2/pokemon'
   let navigate = useNavigate();
   const [itemPokemon, setItemPokemon] = useState([])
   const [baseURL, setbaseUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
   const [loading, setLoading] = useState(false)
   const [isClick, setIsClick] = useState(false)
   const [dataExist, setDataExist] = useState()
   const { add } = useIndexedDB('PokemonStorage')
   const { getByID } = useIndexedDB('pokemonStorage')


   const catchPokemon = async () => {
      try {
         setLoading(true)
         const response = await axios.get(baseURL)

         setbaseUrl(response.data.next)

         const showImage = (results) => {
            getDataPokemon(results)
         }

         showImage(response.data.results)
         setLoading(false)
      } catch (err) {
         console.log('error')
      }
   }

   const getDataPokemon = async (results) => {
      results.forEach(async (pokemon) => {
         const response = await axios.get(`${baseAPI}/${pokemon.name}`)

         setItemPokemon((prevValue) => [...prevValue, response.data])
         await itemPokemon.sort((a, b) => a.id - b.id)
         return itemPokemon
      })
   }

   const getDetail = async (id, nickname) => {
      try {
         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

         navigate('../pokemondetail/ability', {
            state: {
               data: response.data,
               nickname: nickname
            }
         })
      } catch (err) {
         console.log(err)
      }
   }

   // Catch Pokemon

   const handleCatch = () => {
      setIsClick(true)
      add({
         id: state.data.id,
         name: state.data.name,
         nickname: state.data.name,
         image: state.data.sprites.other.dream_world.front_default,
      }).then(() => {
         console.log('sukses')
      })
   }

   useEffect(() => {
      getByID(state?.id).then(data => {
         setDataExist(data)
      })
   }, [])


   const ListContext = {
      itemPokemon: itemPokemon,
      loading: loading,
      isClick: isClick,
      catchPokemon: catchPokemon,
      getDetail: getDetail,
      handleCatch: handleCatch,
      setIsClick: setIsClick,
      dataExist: dataExist
   }




   return (
      <PokemonListContext.Provider value={ListContext}>
         {props.children}
      </PokemonListContext.Provider>
   )
}

export default PokemonProvider
