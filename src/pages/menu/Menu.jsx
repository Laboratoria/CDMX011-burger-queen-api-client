import React, { Fragment, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../../components/style/Style.css';
import GetProducts from "../../components/products";

function Menu (){
    const navigate = useNavigate();
    const logOut = async () => {
        try {
            await signOut(auth);
            console.log('LogOut');
            navigate("/");    
        } catch (error) {
            console.log(error.code);
        }
    }

    const [products, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            })
    }, []);
    
    console.log(products)
    return(
        <Fragment>
            <h1>Pedidos</h1>
            {
                products && <GetProducts products= { products }/> 
            }
            <button onClick={logOut}>Cerrar Sesion</button>
        </Fragment>
    )
}

export default Menu;