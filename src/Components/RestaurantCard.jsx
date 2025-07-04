function RestaurantCard(props) {
    return (
        <div className="restaurantcard">
            {console.log(props)}
            <img className="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resdetails.info.
                cloudinaryImageId
            } alt="" />
            <h2>{props.resdetails.info.name}</h2>
            <h5 className="cuisines"> {props.resdetails.info.cuisines.join(",")}</h5>
            <h4>{props.resdetails.info.avgRating}</h4>
            <h5>{props.resdetails.info.sla.deliveryTime}</h5>
            <h5>{props.resdetails.info.areaName}</h5>
        </div>
    )
}

export default RestaurantCard