import React from 'react'
import { NavigationBar, WrapNav, WrapImg } from '../assets/styles/Navbar.styled'
import logoPokemon from './../assets/images/pokemonlogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
   let Nav1 = 'My Pokemon List'
   let Nav2 = 'Pokemon List'

   const handleActiveBtn = () => {}

   return (
      <>
         <NavigationBar>
            <WrapNav>
               <WrapImg>
                  <Link to="/">
                     <img src={logoPokemon} alt="" />
                  </Link>
               </WrapImg>
               <ul>
                  <li>
                     <Link to="/mypokemonlist">{Nav1}</Link>
                  </li>
                  <li>
                     <Link to="/listpokemon">{Nav2}</Link>
                  </li>
               </ul>
            </WrapNav>
         </NavigationBar>
      </>
   )
}

export default Navbar
