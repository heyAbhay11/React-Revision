import React from 'react'
import { NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <div className='w-full h-20 bg-gray-300 flex justify-between'>
            <div className='flex gap-5'>
                <NavLink to="/home">HOME</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/service">SERVICE</NavLink>
                <NavLink to="/mobile">MOBILE</NavLink>
                <NavLink to="/laptop">LAPTOP</NavLink>
            </div>
        </div>
    )
}

export default NavBar
