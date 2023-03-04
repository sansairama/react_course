import '../index.css'
import Shimmer from './Shimmer'
import { useContext } from 'react'
import {useState,useEffect} from 'react'
import {IMG_CDN_URL} from '../constants'
import {Link} from 'react-router-dom'
import {transform} from '../utils/helper'
import useOnline from '../utils/useOnline'
import CreateContext from '../utils/CreateContext'
const Restaurant = ({name,cloudinaryImageId,cuisines,costForTwoString,avgRating}) => {
    const { user } = useContext(CreateContext)
    return (
        
        <div className="w-96 gap-1 p-4 ml-10 mr-10 mt-12 shadow-[rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;] border-2 border-gray-400 hover:border-black hover:border-2 ease-out duration-75">
            <img className="w-screen pb-3" src={ IMG_CDN_URL  + cloudinaryImageId}  alt=""/>
            <div className='font-light text-sm'>
            <h3 className='font-semibold text-lg pb-3'>{name }</h3>
            <h4 className='break-words pb-3'>{cuisines.join(",")}</h4>
            </div>
            <div className='flex gap-[2vw] p-2 text-sm font-extralight font-serif'>
            <h4 style={ avgRating > 4 ? {backgroundColor:"#50C878",padding:"3px",color:'black'}:{backgroundColor:"orange",padding:"3px",color:'black'}}>{avgRating}</h4>
            <h4>{costForTwoString}</h4>
            <div className='text-xs font-light'>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            </div>
            </div>
        </div>
    )
}
const Body = () => {
    const [value,setValue] = useState("")
    const [filters,setFilter] = useState([])
    const [alldata,setAlldata] = useState([])

    console.log(useState())
    console.log("Shashwat")
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
        console.log(alldata)
      }

    online= useOnline()

    if(!online)
    {
      return <h1>!!!User is not online try later</h1>
    }

   if(!alldata) return null;


   return alldata?.length === 0 ?
   ( <Shimmer/> )
    :(
    <>
     <div className="p-5 flex gap-3 ml-48">
            <input type="" 
            value={value}
            onChange = {() => setValue(event.target.value)}
            className="w-72 p-1 border-2 rounded-md border-black"
            placeholder = "Search for food.."
            />
    <button onClick={()=>{
    const data = transform(value,alldata)
     setFilter(data)
    }} className="w-24 h-10 p-1  bg-cyan-500 rounded-md text-white hover:bg-cyan-600">Click me</button>
    </div>
    <div className=" flex flex-wrap items-center justify-center">
    {
        filters.map((infos) =>  <Link
        to={"/restaurant/" + infos.data.id}
        key={infos.data.id}
      > <Restaurant {... infos.data}/>
      </Link>
      )
    }
    </div>
    </>
   )
}

export default Body