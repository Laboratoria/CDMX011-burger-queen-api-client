import "../Form.scss";
import logo from "../img/bq_logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../firebase/loginauth.js";


export default function Form() {
  let navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword);
    navigate("/page1");
    console.log(loginEmail);
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
              type="password"
              id="password"
              name="password"
              autoComplete="on"
              placeholder="******"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            /> 
            <div className="center-item">                     
            <button className="btt-submit" type="submit" value="INGRESAR"/>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
