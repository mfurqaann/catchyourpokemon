import React from 'react'
import { useLocation } from 'react-router-dom'
import {
   BoxAbility,
   ContainerBoxAbility,
} from '../assets/styles/BoxAbility.styled'

const AbilityPokemon = () => {
   let location = useLocation()
   let state = location.state.data
   return (
      <ContainerBoxAbility>
         {state.abilities.map((ability, index) => (
            <BoxAbility key={index}>{ability.ability.name}</BoxAbility>
         ))}
      </ContainerBoxAbility>
   )
}

export default AbilityPokemon
