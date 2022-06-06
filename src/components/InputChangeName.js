import React, { useState } from 'react'
import { useIndexedDB } from 'react-indexed-db';
import { useNavigate } from 'react-router-dom';

const InputChangeName = ({ state }) => {
    const [inputName, setInputname] = useState('')

    const { update } = useIndexedDB('pokemonStorage')

    let navigate = useNavigate()

    const handleChangeName = (e) => {
        setInputname(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputName.length === 0) {
            return alert('silahka isi dulu')

        }

        update({ id: state.id, name: inputName, img: state.sprites.other.dream_world.front_default }).then(
            event => {
                alert('Edited')
            }
        )

        navigate('../mypokemonlist')

    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChangeName} value={inputName} />
            <button>Submit</button>
        </form>
    )
}

export default InputChangeName