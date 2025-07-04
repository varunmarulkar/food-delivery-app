
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import restaurantData from "../../utils/restaurantdetails";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import onlineCheckStatus from "../../utils/onlineCheckStatus";

function Body() {

    const [FilteredRestaurants, setFilteredRestaurants] = useState([])
    const [defaultRestaurants, setDefaultRestaurants] = useState([])
    const [isFilter, setIsFilter] = useState(false)
    const [clickedDelivery,setClickedDelivery]=useState(false)

    function filteredRestaurants() {
        const filteredrestaurants = defaultRestaurants.filter((r) => r.info.avgRating
            > 4.3)
        setFilteredRestaurants(filteredrestaurants)
        setIsFilter(!isFilter)
        !isFilter ? setFilteredRestaurants(filteredrestaurants) : setFilteredRestaurants(defaultRestaurants)
    }

    function delivery(){
        const fastDelivery=defaultRestaurants.filter((restaurant)=>
            restaurant.info.sla.deliveryTime>25 && restaurant.info.sla.deliveryTime<30 
        )
        setFilteredRestaurants(fastDelivery )
        setClickedDelivery(!clickedDelivery)
        !clickedDelivery ? setFilteredRestaurants(fastDelivery) : setFilteredRestaurants(defaultRestaurants)
    }



    useEffect(() => {
        fetchData()
    }, [])

 function searchText(d){
    const search=defaultRestaurants.filter((r)=>{
       return r.info.name.toLowerCase().includes(d.toLowerCase())
    })
    setFilteredRestaurants(search)
 }

    if(defaultRestaurants.length===0){
        return <Shimmer/>
    }

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)
        setDefaultRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    console.log("rendered",defaultRestaurants)

    return (
        <div>
            
            <div className="options">
            <input onChange={(e)=>searchText(e.target.value)} type="text" placeholder="search" className="search"   />
                <button onClick={filteredRestaurants} >Filter</button>
                <button onClick={delivery}>FastDelivery</button>
            </div>
            <div className='rescontainer'>
                {FilteredRestaurants.map((res) => {
                    return <Link to={`/restaurants/${res.info.id}`}><RestaurantCard key={res.info.id} resdetails={res} /></Link>
                })}
            </div>
        </div>
    )
}


export default Body