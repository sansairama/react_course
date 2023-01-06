import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
//using jsx

const head = <h1>Heading 1</h1> 


const NewElement = () => { //functional jsx component. React is all about componenets
    return (
        <div>
        <Navbar/>
        <div>
            {head}
             {/* <head2/> or {head2()} for functions . Infact any valid javascript can be contained inside functions */}
            <h2>Heading 2</h2>
            <ul>
                <li key='1'>one</li>
                <li key='2'>two</li>
                <li key='3'>three</li>
            </ul>
        </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<NewElement/>)
