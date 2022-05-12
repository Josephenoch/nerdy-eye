import React from 'react'
import Cart from "../../Assets/Icons/Icon-eather-shopping-cart.svg"
import UserAvatarIcon from "../../Assets/Icons/user-avatar.svg"
import DropDownIcon from "../../Assets/Icons/angle-down.svg"
import MenuIcon from "../../Assets/Icons/menu.svg"

import { NavLink } from './NavLink'
import { Logo } from '../GeneralComponents/Logo'



export const Navbar = () => {
  const navlinks = ["services", "academy", "community", "workforce", "store", "affliate"]
  return (
    <nav className=" bg-white w-full h-16 lg:h-[13%] flex shadow-xl lg:shadow-none justify-between items-center z-20 fixed top-0">
        <Logo extraClass="ml-10"/>
        <div className=" space-x-5 z-20 relative hidden lg:flex">
            {
                navlinks.map((link,index)=> <NavLink key={index} text={link}/>)
            } 
        </div>
        <div className='flex items-center'>
            <img src={Cart} alt="Cart" className="mr-6 w-[20px]"/>
            <img src={MenuIcon} alt="Menu" className="lg:hidden mr-10"/>
            <div className="items-center space-x-3 mr-10 hidden lg:flex">
                <img src={UserAvatarIcon} alt="User Avatar" className="w-[15px] "/>
                <span className="text-xs font-bold">My Account</span>
                <img src={DropDownIcon} alt="User Avatar" className="w-[15px]"/>
            </div>
        </div>
    </nav>
  )
}
