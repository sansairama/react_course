import datas from './Data'
import '../index.css'
import {useState} from 'react'
const Restaurant = ({name,cloudinaryImageId,cuisines,costForTwoString,avgRating}) => {
    return (
        
        <div className="body_items">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}  alt=""/>
            <div className='inner_items'>
            <h3>{name }</h3>
            <h4 className='cuisines'>{cuisines.join(",")}</h4>
            </div>
            <div className='price'>
            <h4 style={{backgroundColor:"orange",padding:"5px"}}>{avgRating}</h4>
            <h4>{costForTwoString}</h4>
            </div>
        </div>
    )
}
const Body = () => {
    const [value,setValue] = useState("")
    const [info,setInfo] = useState(datas)
    const transform = (v) => {
        if(v) {
         newinfo = info.filter((infos) => infos.data.name.includes(v))
         return newinfo
        }
        else
        return datas
    }
   return (
    <>
     <div className="search_box">
            <input type="" 
            value={value}
            onChange = {() => setValue(event.target.value)}
            />
    <button onClick={()=>{
    const data = transform(value)
     setInfo(data)
    }}>Click me</button>
    </div>
    <div class="dinner_list">
    {
        info.map((infos) => <Restaurant {... infos.data}/>)
    }
    </div>
    </>
   )
}

export default Body