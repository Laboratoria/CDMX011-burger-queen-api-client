import React, { Fragment } from 'react';
//import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../FirebaseConfig';
// import app from '../FirebaseConfig'

function SignUp () {

    return (
        <Fragment>
            <div className = 'signUp'>
             <h1>Regístrate</h1>
             <form className ='signUpForm'>
                 <label> Correo Electrónico: </label>
                 <input
                 type='email'
                 placeholder='Ingresa tu email'
                 id= 'formEmail'
                 className= 'emailInput'></input>
                 <label> Contraseña: </label>
                 <input
                 type='password'
                 placeholder='Ingresa una contraseña válida'
                 id= 'formPassword'
                 className= 'passwordInput'></input>
                 <button 
                 type= 'submit'
                 className= 'buttonForm'>Registrarse</button>
             </form>
            </div>
        </Fragment>
    )
}

export default SignUp