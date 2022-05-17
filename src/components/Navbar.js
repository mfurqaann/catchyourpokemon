import React from 'react'
import { NavigationBar, WrapNav, WrapImg } from '../assets/styles/Navbar.styled'
import logoPokemon from './../assets/images/pokemonlogo.png'

const Navbar = () => {

    return (
        <NavigationBar>
            <WrapNav>
                <WrapImg>
                    <img src={logoPokemon} alt="" />
                </WrapImg>
                <ul>
                    <li>
                        <a href="/#">My Pokemon List</a>
                    </li>
                    <li>
                        <a href="/#">Pokemon List</a>
                    </li>
                    <li>
                        <a href="/#">Pokemon Detail</a>
                    </li>
                </ul>
            </WrapNav>
        </NavigationBar>
    )
}

export default Navbar