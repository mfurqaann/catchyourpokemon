import React from 'react'
import { useLocation } from 'react-router-dom'
import {
   BoxAbility,
   ContainerBoxAbility,
} from '../assets/styles/BoxAbility.styled'

const StatsPokemon = () => {
   let location = useLocation()
   let state = location.state.data

   return (
      <ContainerBoxAbility>
         {state.stats.map((stats, index) => (
            <BoxAbility key={index}>{stats.stat.name}</BoxAbility>
         ))}
      </ContainerBoxAbility>
   )
}

export default StatsPokemon
