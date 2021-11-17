import '../components/style/Style.css';

const GetProducts = ({products}) => {
    return (
        <div className= "products-menu">
            {(products.map(elem => (
                   <button 
                   className= 'product'
                   key = { elem.id }
                   >
                       <span className = 'image'>
                           <img src= { elem.image } alt = { elem.name }></img>
                        </span>
                       <span className = 'price'>
                           <span>{elem.name}</span>
                           <span>{'$ ' + elem.price}</span>
                       </span>
                   </button>
                ))
            )}
        </div>
    )
}

export default GetProducts