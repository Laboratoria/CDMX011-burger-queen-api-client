import React, { Fragment, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig';

function LogIn (){
    const [loginMail, setLoginMail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const logInPromise = async (event) =>{
        event.preventDefault();
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginMail,
                loginPassword
            );
            console.log(user);
        }catch(error){
            console.log(error.message);
        }
    }

    return(
        <Fragment>
            <h1>Iniciar sesion</h1>
            <form>
                <label> Correo Electrónico: </label>
                <input
                 type='email'
                 placeholder='Ingresa tu email'
                 className= 'formInput'
                 onChange={(event) => {
                    setLoginMail(event.target.value);
                  }}></input>
                 <label> Contraseña: </label>
                 <input
                 type='password'
                 placeholder='Ingrese su contraseña'
                 className= 'formInput'
                 onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}></input>
                 <button 
                 className= 'buttonForm'
                 type='submit'
                 onClick={logInPromise}>Enviar</button>
            </form>
        </Fragment>    
    )
}

export default LogIn