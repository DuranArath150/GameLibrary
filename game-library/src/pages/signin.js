import React from 'react'

import './signindi.css'

const SignIn = () => {
    return (
      <div 
      style={{
      display:'flex', 
      justifyContent:'center',
      alignItems:'center',
      height:'91.8vh'
      }}
      >
        <form>
          <div className='form-inner'>
            <h2 class="text-center">Iniciar Sesión</h2>
            {/*ERROR! */}
            <div className="form-group py-3">
              <label htmlFor='name'>Nombre de usuario: </label>
              <input type='text' name='name' id='name'/>
            </div>
            <div className="form-group py-3">
              <label htmlFor='password'>Contraseña: </label>
              <input type='password' name='password' id='password'/>
            </div>
            <input type="submit" value="Iniciar Sesión" />
          </div>
          </form>
      </div>
    );
  };

export default SignIn;