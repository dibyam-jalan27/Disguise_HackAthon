import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
<<<<<<< HEAD
import Photo from "./Pages/Photo.js";
=======
import Destination from "./Pages/Destination";
>>>>>>> 493aa3957636e0e87e858f58b8ec526448533265
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

function App() {
  return (
    <div>
      <Router>
        <Navbar/> 
        <Routes>
         <Route path='/' element ={<Home/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/signup' element ={<SignUp/>}/>
          <Route path='/otp' element ={<OTP/>}/>
          <Route path='/photos' element ={<Photo/>}/>
          <Route path='/password/reset/:token' element ={<Reset/>}/>
          <Route path='/Destination/:destinationId' element={<Destination/>}/>
        </Routes>
      </Router>
  </div>
  );
}

export default App;
