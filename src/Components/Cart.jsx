import { useSelector } from "react-redux"
import ItemList from "./ItemList"

function Cart(){
    const cardItems=useSelector((store)=>{
       return store.cart.items
    })
    return(
      
        <div className="cart">
              <div>
                <ItemList items={cardItems}/>
              </div>
        </div>
      
    )
}

export default Cart