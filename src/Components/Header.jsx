import {Url} from "../../utils/Logo"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"  //subscribing the store using selector

function Header() {
  const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div>
      <div className='header'>
        <div className='logocontainer'>
          <img className='logo' src={Url} alt="" />
        </div>

        <div className='nav-items'>
          <ul className='nav-list'>
            <li>
             <Link to="/">Home</Link> 
              </li>
            <li>
              <Link to="/About">About</Link> 
              </li>
            <li>
             <Link to="/SignIn">SignIn</Link> 
              </li>
            <li>
              <Link to='/Cart'>Cart ({cartItems.length})</Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header 