import React from 'react'
import { useLocation } from 'react-router-dom'
import {
   BoxAbility,
   ContainerBoxAbility,
} from '../assets/styles/BoxAbility.styled'

const StatsPokemon = () => {
   let location = useLocation()
   let state = location.state

   console.log(state.stats)

   return (
      <ContainerBoxAbility>
         {state.stats.map((stats) => (
            <BoxAbility>{stats.stat.name}</BoxAbility>
         ))}
      </ContainerBoxAbility>
   )
}

export default StatsPokemon
