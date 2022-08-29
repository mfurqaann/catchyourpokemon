import React, { useState, useContext, useEffect } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import { useNavigate } from 'react-router-dom'
import { Input } from '../assets/styles/Input.styled'
import { Button } from '../assets/styles/Button.styled'

import { PokemonListContext } from '../context/ListContext/PokemonListContext'

const InputChangeName = ({ state }) => {
   let CtxPokemon = useContext(PokemonListContext)
   const [nickName, setNickname] = useState(state.name)

   const { update } = useIndexedDB('pokemonStorage')

   let navigate = useNavigate()

   const handleChangeName = (e) => {
      setNickname(e.target.value)
   }


   const handleSubmit = (e) => {
      e.preventDefault()

      if (nickName.length === 0) {
         return alert('silahkan isi dulu')
      }

      update({
         id: state.id,
         name: state.name,
         img: state.image,
         nickname: nickName
      }).then((e) => {
         alert('Updated')
         CtxPokemon.setIsClick(false)
         navigate('../mypokemonlist')
      })
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
         <Input onChange={handleChangeName} value={nickName} />
         <Button submitInput>Submit</Button>
      </form>
   )
}

export default InputChangeName
