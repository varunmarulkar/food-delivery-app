import ItemList from "./ItemList"
import { useState } from "react"

const RestaurantCategory = (props) => {
    const[showItem,setShowItem]=useState(false)
    function showItems(){
        setShowItem(!showItem)
    }
    return (
        <div>
            <div className="rest-category" onClick={showItems}>
                <span>{props.data.title} ({props.data.itemCards.length})</span>
                
                <span className="dropDown" >⬇️</span>
            </div>
            <div className="lists-name">
                { showItem && <ItemList items={props.data.itemCards} />}</div>
               
        

        </div>
    )
}

export default RestaurantCategory