import React, { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/firebase.Config.js";
import "../Form.scss";
import logo from "../img/bq_logo.png";
import { useNavigate } from "react-router-dom";

export default function Form() {
 /*  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */
  let navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch(error){
      console.log(error.message);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/page1");
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="anvorgesa@gmail.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />                      
            <input className="btt-submit" type="submit" value="INGRESAR" onClick={login} />
          </form>
        </div>
      </section>
    </>
  );
}
