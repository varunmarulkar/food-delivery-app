import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

function ItemList(props) {

const dispatch=useDispatch()

  function handleAddItem(item){
      dispatch(addItem(item))
  }
    return (
      <div className="item-list">
        {props.items.map((item) => {
          return (
            <div className="item" key={item.card.info.id}>
              <div className="item2">
                <span>{item.card.info.name}</span>
                <span>₹{item.card.info.price? item.card.info.price/ 100: item.card.info.defaultPrice/100}</span>
                <button className="add-btn" onClick={()=>handleAddItem(item)}>Add</button> 
              </div>
          
              <p>{item.card.info.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default ItemList;
  