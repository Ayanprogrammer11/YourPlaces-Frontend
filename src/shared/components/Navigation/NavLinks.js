import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavLinks.css"
export default function NavLinks() {
  return (
    <ul className='nav-links'>
        <li>
        <NavLink to="/" exact>All Users</NavLink>
        </li>
        <li>
        <NavLink to="/u1/places" exact>My Places</NavLink>
        </li>
        <li>
        <NavLink to="/places/new" exact>Add Place</NavLink>
        </li>
        <li>
        <NavLink to="/auth" exact>Authenticate</NavLink>
        </li>
    </ul>
  )
}
