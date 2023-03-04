import '../index.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import UseContext from '../utils/UseContext'
const Title = () => {
    return (
    <>
    <img className="h-24 p-3 mt-1 ml-9 " src="https://www.tkom.it/wp-content/uploads/2015/02/Villa-Food-600x6001.jpg" alt="" />
    </>
    )
}


const   Header = () => { //functional jsx component. React is all about componenets
    const { user,useUser } = useContext(UseContext)
    return (
        <div className=" w-12/12 flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black items-center m-auto">
        <Title></Title>
        <div>
            <ul className=" flex  p-9 gap-9 ">
                <li><input className=' p-1' type="text" value={user.name} onChange = {e => useUser({name:e.target.value,email:"new_email.com"})}/></li>
                <li>{user.name}</li>
                <li ><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
                <li><Link to="/instamart">Instamart</Link></li>
                <li>Cart</li>

            </ul>
        </div>
        </div>
    )
}
export default Header