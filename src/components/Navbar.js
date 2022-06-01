import React from 'react'
import { NavigationBar, WrapNav, WrapImg } from '../assets/styles/Navbar.styled'
import logoPokemon from './../assets/images/pokemonlogo.png'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
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
                     <Link to="/mypokemonlist">My Pokemon List</Link>
                  </li>
                  <li>
                     <Link to="/listpokemon">Pokemon List</Link>
                  </li>
                  <li>
                     <Link to="/pokemondetail">Pokemon Detail</Link>
                  </li>
               </ul>
            </WrapNav>
         </NavigationBar>
         {/* <Outlet /> */}
      </>
   )
}

export default Navbar
