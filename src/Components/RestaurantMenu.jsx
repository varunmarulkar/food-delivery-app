import { useEffect } from "react"
import { useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { restItems } from "../../utils/Logo"
import RestaurantCategory from "./restaurantCatergory"

function RestaurantMenu() {
    const [resInfo,setResInfo]=useState(null)
   const {resId}=useParams()
   const[showItem,setShowItem]=useState(false)
   
    useEffect(() => {
        fetchMenu()
    }, [])

    async function fetchMenu() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6804639&lng=74.018261&restaurantId=${resId}`)
        const json = await data.json()

        setResInfo(json.data)
        // Options chaingin//
        console.log(json.data)
    }

  

    if(resInfo===null){
        return <Shimmer/>
    }
    const {name, cuisines, costForTwoMessage}=resInfo?.cards?.[2]?.card?.card?.info
    const {itemCards}=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card
    const categories=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    return c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"   //[@type] because "@type" js does not recognized
    })
    
    // console.log("categories1",resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // console.log("categories",categories)


    return (
        <div className="menu-container">
            <div className="menu-header">
            <h1 className="rest-name">{name}</h1>
            <img src="ImageId" alt="" />
            <p>{cuisines}-{costForTwoMessage}</p>
            {/*accordian using every categories*/}
            {categories.map((category)=>{
                return <RestaurantCategory    data={category?.card?.card}/>
            })}
            </div>
        </div>
    )
}

export default RestaurantMenu