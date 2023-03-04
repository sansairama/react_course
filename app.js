import ReactDOM from 'react-dom/client'
import './index.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contacts'
import About from './components/About'
import Team from './components/Team'
import Menu from './components/RestaurantMenu'
import { lazy, Suspense, useState } from 'react'
import Shimmer from './components/Shimmer'
import UseContext from './utils/UseContext'
import CreateContext from './utils/CreateContext'
// <--------------- nested structure using React.createElement() ------------------------->
// const title = React.createElement(
//   "div",
//   {
//     class: "title",
//   },
//   [          
//     React.createElement("h1", { id: "h1", key: "Large" }, "I'm a h1 tag"),
//     React.createElement("h2", { id: "h2", key: "Medium" }, "I'm a h2 tag"),
//     React.createElement("h3", { id: "h3", key: "Small" }, "I'm a h3 tag"),
//   ]
// );

// <--------------- same structure using JSX ------------------------->
// const title = (
//   <div className="title">
//     <h1 id="h1" key="Large">
//       I'm a h1 tag
//     </h1>
//     <h2 id="h2" key="Medium">
//       I'm a h2 tag
//     </h2>
//     <h3 id="h3" key="Small">
//       I'm a h3 tag
//     </h3>
//   </div>
// );

// <--------------- functional component of the same structure ------------------------->
// const Title = () => (
//   <div className="title">
//     <h1 id="h1" key="Large">
//       I'm a h1 tag
//     </h1>
//     <h2 id="h2" key="Medium">
//       I'm a h2 tag
//     </h2>
//     <h3 id="h3" key="Small">
//       I'm a h3 tag
//     </h3>
//   </div>
// );

// <--------------- Composition Of Components(component inside component) ------------------------->
// const TeacherInfo = () => {
//   return (
//     <div>
//       <h1>Akshay Saini</h1>
//       <TeacherImg>
//       </TeacherImg>
//     </div>
//   );
// };

// <--------------- Header ------------------------->







const Instamart = lazy(() => import('./components/Instamart') );

const Apps = () => 
{
  const [user,useUser] = useState({
    name:'Karun',
    email:'karun@gmail.com'
  })
  return(
     <>
     <CreateContext.Provider value ={{
      user:user
    }}>
    <UseContext.Provider value ={{
      user:user,
      useUser:useUser
    }}>
  <Header/>
  {/* This is needed if we are doing nested routing. Whatever children we have in
            config, all will go into outlet acc to route */}
  <Outlet/>
  <Footer/>
  </UseContext.Provider>
  </CreateContext.Provider>
  </>
)
          }
//create browser is a list of objects
const approuter = createBrowserRouter (
  [
    {
      path:"/",
      element:<Apps/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/contacts",
          element:<Contact/>
        },
        {
          path:"/about",
          element:<About/>,
          children:[
            {
              path:"team",
              element:<Team/>
            }
          ]
        },
        {
          path: "/restaurant/:resId",
          element: <Menu/>,
        },
        {
          path: "/instamart",
          element:(  <Suspense fallback={<Shimmer />}>
          <Instamart />
        </Suspense> )
        }
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))//React starts from whichever element has id root
root.render(<RouterProvider router={approuter}/>)