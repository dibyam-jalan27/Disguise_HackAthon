import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Outlet ,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import OTP from './Pages/OTP';
import Reset from './Pages/Reset';
import { Locationpage } from './Pages/Locationpage';
import About from './Pages/About';
function App() {
  return (
    <div>
      <Router>
        <Navbar/> 
        <Routes>
         <Route path='/' element ={<Home/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/signup' element ={<SignUp/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/otp' element ={<OTP/>}/>
          <Route path='/password/reset/:token' element ={<Reset/>}/>
          <Route path='/Destination' element={<Locationpage/>}/>
        </Routes>
      </Router>
  </div>
  );
}

export default App;
