import { Product } from "../product/product";
import { authUser } from "../User";
import BttnLogout from "../nav.js/BttnLogOut";
import "../../Menu.scss"


export default function Menu() {
  const currentUser = authUser();
  
    return (
      <div className="cont-1">
        <div className="cont-2" >
          <div>
            logo
          </div>
          <div>
            bttn pedido
          </div>
          <div>
              <BttnLogout/>                            
          </div>
          <div>
            <p> { currentUser?.email } </p> 
          </div>          
        </div>

        <div >
        
        <Product/>
        
        </div>

      </div>
        
    )
}