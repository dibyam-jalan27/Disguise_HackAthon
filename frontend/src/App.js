import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer" ;
import About from './Pages/About';

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
import Location from './Pages/Location';

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
          <Route path='/location' element ={<Location />}/>
        </Routes>
        <Footer />
      </Router>
  </div>
  );
}

export default App;
