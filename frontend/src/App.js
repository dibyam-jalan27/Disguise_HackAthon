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
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    
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
      } 
    ]
  }
])
function App() {
  return (
    <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
