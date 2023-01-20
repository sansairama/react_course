import '../index.css'
import Shimmer from './Shimmer'
import {useState,useEffect} from 'react'
const Restaurant = ({name,cloudinaryImageId,cuisines,costForTwoString,avgRating}) => {
    return (
        
        <div className="body_items">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}  alt=""/>
            <div className='inner_items'>
            <h3>{name }</h3>
            <h4 className='cuisines'>{cuisines.join(",")}</h4>
            </div>
            <div className='price'>
            <h4 style={ avgRating > 4 ? {backgroundColor:"#50C878",padding:"3px"}:{backgroundColor:"orange",padding:"3px"}}>{avgRating}</h4>
            <h4>{costForTwoString}</h4>
            </div>
        </div>
    )
}
const Body = () => {
    const [value,setValue] = useState("")
    const [filters,setFilter] = useState([])
    const [alldata,setAlldata] = useState([])




    const transform = (v,a) => {
        {
         newinfo = a.filter((infos) => infos?.data?.name?.toLowerCase().includes(v.toLowerCase()))
         return newinfo
        }
    }
    useEffect(() => {
        getRestaurants();
        console.log("hello")
      }, []);
    
      async function getRestaurants() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setAlldata(json?.data?.cards[2]?.data?.data?.cards)
        setFilter(json?.data?.cards[2]?.data?.data?.cards)
      }
      console.log("world")

   if(!alldata) return null;


   return alldata?.length === 0 ?
   ( <Shimmer/> )
    :(
    <>
     <div className="search_box">
            <input type="" 
            value={value}
            onChange = {() => setValue(event.target.value)}
            placeholder = "Search for food.."
            />
    <button onClick={()=>{
    const data = transform(value,alldata)
     setFilter(data)
    }}>Click me</button>
    </div>
    <div className="dinner_list">
    {
        filters.map((infos) => <Restaurant key={infos.data.id} {... infos.data}/>)
    }
    </div>
    </>
   )
}

export default Body