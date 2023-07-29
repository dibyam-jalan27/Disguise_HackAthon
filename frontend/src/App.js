import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet ,
  Route,
  Link,
} from "react-router-dom";
import OTP from './Pages/OTP';
import Reset from './Pages/Reset';

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
        path :"/password/reset",
        element: <Reset />
      }
    ]
  }
])
function App() {
  return (
    <div>

    <RouterProvider router={router} />
    <Navbar/>
  </div>
  );
}

export default App;
