import ReactDOM from 'react-dom/client'
import './index.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
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










const Apps = () => (
    <>
  <Header/>
  <Body/>
  <Footer/>
  </>
)


const root = ReactDOM.createRoot(document.getElementById("root"))//React starts from whichever element has id root
root.render(<Apps/>)