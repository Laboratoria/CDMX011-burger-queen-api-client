import React from 'react';


function SendButton ({client,table, products}){
    
    const saveOrder = () => {
        const order ={
            'client': client,
            'table': table,
            'products': products,
            'status': 'pending',
            'dateEntry': new Date()
        }
        
        if(client === '' || table === '' || Object.keys(products).length === 0) {
            alert('inserta los datos necesarios')
        } else {
            fetch('http://localhost:8000/orders', {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        }).then(
            alert('La orden se envió con éxito a la cocina')
        )
        }
    } 

 return (
    
    <button onClick={saveOrder}>
        Enviar
    </button>)
}

export default SendButton;