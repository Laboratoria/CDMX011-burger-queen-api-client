import "../Form.scss";
import logo from "../img/bq_logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../firebase/loginauth.js";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/firebase.Config";

export default function LogIn () {
  let navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/menu");        
      } else {
        navigate("/");
      }
    });
    // eslint-disable-next-line
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await Login(loginEmail, loginPassword);
      navigate("/menu");
      console.log(loginEmail);
    }
    catch(error) {
      setError("Contraseña o usuario no válido");
    }       
  };
  return (
    <>
      <section className="container-0">
        <div className="bq_logo">
          <img className="logbq" src={logo} alt="logo burger queen" />
        </div>
        <div className="container-1">
          <h2 className="bq_sign">INGRESAR</h2>
          <form className="formStyle" onSubmit={handleSubmit}>
            <br />            
            <label htmlFor="email" >USUARIO</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="anvorgesa@gmail.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />            
            <label htmlFor="password">CONTRASEÑA</label>
            <input
              required
              type="password"
              id="password"
              name="password"
              autoComplete="on"
              placeholder="******"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            /> 
            {/*<p className="error" >{ error}</p> */}
            <div className="errorLogin">{error}</div>
            <div className="center-item">                     
            <button className="btt-submit" type="submit" value="INGRESAR">INGRESAR</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
