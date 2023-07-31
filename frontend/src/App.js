import './App.css';
import React,{useEffect} from 'react'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import WishlistPage from "./Pages/WishlistPage";
import ItineraryPage from "./Pages/ItineraryPage";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer" ;
import axios from "axios";
//import About from "./Pages/About";
//import ItineraryPage from "./Pages/ItineraryPage";
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
  const [login,setLogin] = React.useState(false);
  useEffect(() => {
    axios.get("/api/v1/me")
      .then((res) => {
        setLogin(true);
      })
      .catch((err) => {
        setLogin(false);
      });
  }, [login])
  
  return (
    <div>
      <Router>
        <Navbar login={login} setLogin={setLogin}/> 
        <Routes>
         <Route path='/' element ={<Home/>}/>
          <Route path='/login' element ={<Login setLogin={setLogin}/>}/>
          <Route path='/signup' element ={<SignUp/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/otp' element ={<OTP/>}/>
          <Route path='/wishlist' element ={<WishlistPage/>}/>
          <Route path='/password/reset/:token' element ={<Reset/>}/>
          <Route path='/location/:id' element ={<Location />}/>
          <Route path='/itinerary' element ={<ItineraryPage />}/>
        </Routes>
        <Footer />
      </Router>
  </div>
  );
}

export default App;
