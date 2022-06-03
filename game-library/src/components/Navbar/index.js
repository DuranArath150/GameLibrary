import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import Logo from '../../images/logo.svg';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='logo' />
        </NavLink>

        <div class="input-group input-group-sm mb-5">
  <div class="input-group-prepend">
  </div>
  <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
  <span class="input-group-text" id="inputGroup-sizing-sm">Buscar...</span>

</div>


        
        <Bars/>
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