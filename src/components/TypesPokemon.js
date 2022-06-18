import React from 'react'
import { useLocation } from 'react-router-dom'
import {
   BoxAbility,
   ContainerBoxAbility,
} from '../assets/styles/BoxAbility.styled'

const TypesPokemon = () => {
   let location = useLocation()
   let state = location.state
   return (
      <ContainerBoxAbility>
         {state.types.map((type) => (
            <BoxAbility>{type.type.name}</BoxAbility>
         ))}
      </ContainerBoxAbility>
   )
}

export default TypesPokemon
