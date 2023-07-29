import logo from './logo.svg';
import './App.css';
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet ,
  Route,
  Link,
  Router,
} from "react-router-dom";
import OTP from './Pages/OTP';
import Reset from './Pages/Reset';
import Navbar from './components/Navbar';
import Footer from './components/Footer' ;
const Layout = () => {
  return(<div className="app">
    <Navbar />
    <Outlet />
    <hr/>
    <Footer />
  </div>
    
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element :<Layout />,
    children : [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/signup",
        element:<SignUp />
      },{
        path: "/otp",
        element : <OTP />
      },{
        path :"/reset",
        element: <Reset />
      }
    ]
  }
])
function App() {
  return (  
  <Router>
    <RouterProvider router={router} />
  </Router>
  
  );
}

export default App;
