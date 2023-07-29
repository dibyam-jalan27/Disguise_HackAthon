import React from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { IconBase } from "react-icons/lib";
import { Link} from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { MdOutlineMedicalServices} from "react-icons/md";
import { MdPermContactCalendar} from "react-icons/md";

export default function Navbar() {

  return (
    <>
      <h1 className="navbar-logo">Trippy</h1>
      <nav className="NavbarItems">
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.title}</Link>
                
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
