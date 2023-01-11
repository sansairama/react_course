import '../index.css'

const Title = () => {
    return (
    <>
    <img className="img" src="https://www.tkom.it/wp-content/uploads/2015/02/Villa-Food-600x6001.jpg" alt="" />
    </>
    )
}


const   Header = () => { //functional jsx component. React is all about componenets
    return (
        <div className="main_header">
        <Title></Title>
        <div className="header_elements">
            <ul>
                <li key='1'>Home</li>
                <li key='2'>About</li>
                <li key='3'>Contact</li>
                <li key='4'>Cart</li>
            </ul>
        </div>
        </div>
    )
}
export default Header