import React, { Fragment, useEffect, useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from '../../FirebaseConfig';
// import { useNavigate } from 'react-router-dom';
import '../../components/style/Style.css';
import GetProducts from "../../components/products";
import HeaderWaitress from "../../components/HeaderWaitress";

//import { auth } from '../../FirebaseConfig';

function Menu (){

    const [products, setData] = useState(null);    
    const [currentMenu, setcurrentMenu] = useState('desayuno');

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);                
            })            
    }, []);

    const menuSelector = () =>{
        return products.filter(data => data.type === currentMenu)
    }
  
   
    return(
        <Fragment>
            <div className='menuHeader'>
                <HeaderWaitress></HeaderWaitress>
            </div>
            <div className="menu">
            <div className="menuBtns">
                <button className="menuBtn" onClick={() => setcurrentMenu('desayuno') }>Desayuno</button>
                <button className="menuBtn" onClick={() => setcurrentMenu('almuerzo')}>Almuerzo y Cena</button> 
            </div>
            <div className="menuElements">
                <div id="listProduct">
                    { products && <GetProducts products= { menuSelector() }/> }
                </div>
                <div className="billMenu">

                </div>
            </div>
            </div>    
        </Fragment>
    )
}

export default Menu;