import React, { useState, useContext } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import { useNavigate } from 'react-router-dom'
import { Input } from '../assets/styles/Input.styled'
import { Button } from '../assets/styles/Button.styled'
import { PokemonDetailContext } from '../context/DetailContext/PokemonDetailContext'

const InputChangeName = ({ state }) => {
   let CtxDetail = useContext(PokemonDetailContext)
   const [inputName, setInputname] = useState(CtxDetail.namePokemon)

   const { update } = useIndexedDB('pokemonStorage')

   let navigate = useNavigate()

   const handleChangeName = (e) => {
      setInputname(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (inputName.length === 0) {
         return alert('silahkan isi dulu')
      }

      update({
         id: state.id,
         name: inputName,
         img: state.sprites.other.dream_world.front_default,
      }).then((e) => {
         alert('Updated')
      })

      CtxDetail.setIsClick(false)
      navigate('../mypokemonlist')
   }

   return (
      <form
         onSubmit={handleSubmit}
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
         }}
      >
         <Input onChange={handleChangeName} value={inputName} />
         <Button submitInput>Submit</Button>
      </form>
   )
}

export default InputChangeName
