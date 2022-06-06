import React from 'react'
import { useLocation } from 'react-router-dom'
import { BoxAbility } from '../assets/styles/BoxAbility.styled'


const AbilityPokemon = () => {

    let location = useLocation()
    let state = location.state

    return (
        <div>
            {state.abilities.map(ability => (
                <div>
                    {ability.ability.name}
                </div>
            ))}
        </div>
    )
}

export default AbilityPokemon