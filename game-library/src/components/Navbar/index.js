import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import './navbar.css'

import Logo from '../../images/logo.svg';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/about'>
          <img src={Logo} alt='logo' />
        </NavLink>
        <input class="searchbar" placeholder="Buscar..."/>
        <button class="boton">Buscar</button>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Libreria
          </NavLink>
          <NavLink to='/services' activeStyle>
            Vincular cuentas
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Registrarse
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Iniciar Sesión</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;