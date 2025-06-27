import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to={"/"}
        id='btn'
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        id='btn'
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to={"/products"}
        id='btn'
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Products
      </NavLink>
    </nav>
  )
}
export default Navbar