import { createContext } from 'react'

export const PokemonListContext = createContext({
    itemPokemon: '',
    loading: '',
    isClick: '',
    PokemonDetail: '',
    catchPokemon: () => { },
    getDetail: () => { },
    handleCatch: () => { },
    setIsClick: '',
    dataExist: ''
})
