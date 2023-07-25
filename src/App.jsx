import './App.css'
import HomePage from "./pages/Home/index.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/index.jsx";
import {listRouter} from "./routes/index.js";

function App() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#fff' : '',
    backgroundColor: isActive ? '#0d6efd' : ''
  })
  return (
   <div>
     {
       listRouter.map((item, index) => <div key={index}>
         <NavLink style={navLinkStyle} to={item.path}>{item.name}</NavLink>
       </div>)
     }
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/login' element={<LoginPage/>}></Route>
     </Routes>
   </div>
  )
}

export default App
