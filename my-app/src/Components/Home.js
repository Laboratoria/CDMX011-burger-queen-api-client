import React, { useState } from "react";
import { auth } from '../firebase/firebase.Config'
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./CurrentUser";
import { Product } from "./product/product";

export default function Home() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const currentUser = useAuth();

  const handlesignOut = async () => {
    try {
      await signOut(auth);
      console.log("saliendo de Burger Queen");
      navigate("/");
    } catch (error) {
      setError("Error");
    }
  };
    return (
        <div>
            <h1>Menú</h1>
            <button className="bttnLogout" onClick={handlesignOut}>Cerrar sesión</button>
            <div className="error">{error}</div>

            <div>Currently logged in as: { currentUser?.email } </div>
            <div>
            <Product></Product>
            </div>
        </div>
        
    )
}