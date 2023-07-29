import {Component} from "react";
import "./NavbarStyle.css"
import { BiHome } from "react-icons/bi";
import {Link} from "react-router-dom";

class Navbar extends Component{
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>

                <ul className="nav-menu">
                    <li>
                        <Link> <BiHome />Home</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar