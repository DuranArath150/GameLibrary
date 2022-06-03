import React from 'react'

import './signupdi.css'

const SignUp = () => {
    return (
      <div 
      style={{
      display:'flex', 
      justifyContent:'center',
      alignItems:'center',
      height:'91.8vh'
      }}
      ><form>
      <div className='form-inner'>
        <h2>Sign Up</h2>
        {/*ERROR! */}
        <div className="form-group py-3">
          <label htmlFor='name'>Nombre de usuario: </label>
          <input type='text' name='name' id='name'/>
        </div>
        <div className="form-group py-3">
          <label htmlFor='email'>Correo electronico: </label>
          <input type='email' name='email' id='email'/>
        </div>
        <div className="form-group py-3">
          <label htmlFor='password'>Contraseña: </label>
          <input type='password' name='password' id='password'/>
        </div>
        <input type="submit" value="Sign Up" />
      </div>
      </form>
        
      </div>
    );
  };

export default SignUp;