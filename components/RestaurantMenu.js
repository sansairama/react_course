import { useEffect, useState,useRef } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import { MENU_IMAGE } from "../constants";
import Shimmer from "./Shimmer";


const Menu = ({name,cloudinaryImageId,price}) =>
{
  const [images,setImage] = useState( MENU_IMAGE  + cloudinaryImageId)
  return (
        
    <div className="w-96 gap-1 p-4 ml-10 mr-10 mt-12  border-2 border-gray-400 hover:border-black hover:border-2 ease-out duration-75">
      <img className="w-11/12 h-64 pb-3 m-auto" src={images} onError={()=>setImage("https://www.shutterstock.com/image-vector/404-error-page-explorer-man-260nw-2161180329.jpg")} alt=""/>
      <div className="flex justify-center">
      <h3 className='font-semibold text-lg pb-3'>{name }</h3>
      </div>
      <div className="flex justify-between mt-5">
      <h4 className="text-sm font-bold">{ "Price"+":"+price/100}</h4>
      <button className="p-1 bg-cyan-200  font-semibold rounded-md">Add Me</button>
      </div>
</div>      
      )
}

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="h-48 w-2/4 m-auto p-10 flex bg-pink-100 mt-5">
        <div className = "flex gap-12 m-auto justify-center items-center">
        <h2 className="font-bold text-xl pr-10">{restaurant?.name}</h2>
        <h3 className="font-semibold ">{restaurant?.area}</h3>
        <br/>
        <div className="flex-col text-xs justify-center items-center">
        <div className="flex-col justify-center items-center  pb-5 ">
        <span className="pr-2 text-sm font-semibold" >{restaurant?.sla?.deliveryTime + "  min"}</span>
        <span className="text-xs font-bold">Delivery time</span>
        </div>
        <div className="flex-col justify-center items-center  pb-5">
        <span className="pr-5 text-sm font-semibold">{restaurant?.avgRating + "+"} </span>
        <span className="text-xs font-bold">Average Rating</span>
        </div>
        <div className="flex-col justify-center items-center  pb-5 ">
        <span className="pr-7 text-sm font-semibold">{restaurant?.costForTwo/100}</span>
        <span className="text-xs font-bold">costForTwo</span>
        </div>
        </div>
       </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-5 justify-center items-center">
          {Object.values(restaurant?.menu?.items).map((item) => (
         <Menu key={item.id} {...item}/>
))}
          {console.log(Object.values(restaurant?.menu?.items))}
        </div>
    </>
  );
};
export default RestaurantMenu