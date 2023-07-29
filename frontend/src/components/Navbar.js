import React from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { IconBase } from "react-icons/lib";
import { Link} from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { MdOutlineMedicalServices} from "react-icons/md";
import { MdPermContactCalendar} from "react-icons/md";
import {VscAccount} from "react-icons/vsc";
import {BsSuitHeart} from "react-icons/bs";
import {AiOutlineLogin} from 'react-icons/ai';
import axios from "axios";

export default function Navbar() {
  axios.get("/api/v1/me").then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
  });
  return (
    <>
      <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>

        <ul className="right">
          <li className="singup">
            <Link to="/signup"><VscAccount/></Link>
              
            </li>
            <li>
              <Link to=""><AiOutlineLogin/></Link>
            </li>
            <li>
              <BsSuitHeart/>
          </li>
        </ul>
      </nav>
    </>
  );
}
