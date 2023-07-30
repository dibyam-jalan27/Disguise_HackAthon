import React, { useState, useEffect } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineLogin } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
import axios from "axios";

export default function Navbar({ login, setLogin }) {

  const logout = () => {
    axios.get("/api/v1/logout")
      .then((res) => {
        setLogin(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
          {login ? (
            <ul className="singup">
              <li>
                <Link to="/me"><VscAccount /></Link>
              </li>
              <li>
                <Link onClick={logout}><AiOutlineLogout /></Link>
              </li>
            </ul>
          ) : (
            <li>
              <Link to="/login"><AiOutlineLogin /></Link>
            </li>
          )}
          <li>
            <BsSuitHeart />
          </li>
        </ul>
      </nav>
    </>
  );
}
