import ReactDom from 'react-dom'
import './Nav.css'

import PersonIcon from '@mui/icons-material/Person';
const Navbar = () => {
    return (
    <div className='User'>
     <img src="https://reactjs.org/logo-og.png" style={{ width: '100px', height: '40px',padding:'15px'}} alt="Hello" className='logo' />
     <form>
        <input type="text" style={{ height: '40px',align:'center'}}/>
     </form>
     <PersonIcon className='icons' style={{ padding:'15px',}}/>
    </div>
    )
}
export default Navbar
