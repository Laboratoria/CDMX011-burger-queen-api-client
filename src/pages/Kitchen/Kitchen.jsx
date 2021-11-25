import React, { Fragment, useState, useEffect } from 'react';
import '../../components/style/Style.css';
import Header from '../../components/Header';
import GetOrders from '../../components/GetOrder';

function Kitchen(){
    const [orders, setOrders] = useState([])
    // const [orderStatus, setOrderStatus] = useState('pending')
    
    
    useEffect(() => {
        fetch('http://localhost:8000/orders')
            .then(res => {
                return res.json();
            })
            .then(data => {  
                const pendingOrders = data.filter((order) => order.status === 'pending')             
                setOrders(pendingOrders);                
            })            
    }, []);

    const changeStatus = (order) =>{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { ...order, "status": 'delivering'} )
        };
        fetch('http://localhost:8000/orders/' + order.id, requestOptions)
            .then(response => response.json())
                        
    }

    // const filterOrders = () => {
    //     return orders.filter((order) => order.status === orderStatus)
    // }

    return(
        <Fragment>
            <div className='kitchenHeader'>
                <Header>
                    <h1> COCINA </h1>
                </Header>
            </div>
            <div className= "kitchenOrders">
                { orders && <GetOrders orders ={orders} changeStatus= {changeStatus}/>}
            </div>
        </Fragment>
    )
}

export default Kitchen