import React, { Fragment, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../FirebaseConfig';

function SignUp () {

    const [signMail, setsignMail] = useState('');
    const [signPassword, setsignPassword] = useState('');
    const [signUsername, setsignUsername] = useState('');
    
    const signPromise = async (event) => {  
        event.preventDefault();      
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                signMail,
                signPassword
            );
            
            await updateProfile(auth.currentUser,{
                displayName: signUsername
            })
            console.log(user);
        } catch (error){
            console.log(error.message)
        }
    }
    
    return (
        <Fragment>
            <div className = 'signUp'>
             <h1>Regístrate</h1>
             <form className ='signUpForm' onSubmit={signPromise}>
                <label> Nombre: </label>
                 <input
                 type='text'
                 placeholder='Ingresa tu numbre'
                 id= 'formUsername'
                 className= 'formInput'
                 onChange={(event) => {
                    setsignUsername(event.target.value);
                  }}></input>
                 <label> Correo Electrónico: </label>
                 <input
                 type='email'
                 placeholder='Ingresa tu email'
                 id= 'formEmail'
                 className= 'formInput'
                 onChange={(event) => {
                    setsignMail(event.target.value);
                  }}></input>
                 <label> Contraseña: </label>
                 <input
                 type='password'
                 placeholder='Ingresa una contraseña válida'
                 id= 'formPassword'
                 className= 'formInput'
                 onChange={(event) => {
                    setsignPassword(event.target.value);
                  }}></input>
                 <button 
                 className= 'buttonForm'
                 type='submit'>Registrarse</button>
             </form>
            </div>
        </Fragment>
    )
}

export default SignUp