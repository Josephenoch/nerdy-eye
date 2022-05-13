import React from 'react'

import Cart from "../../Assets/Icons/Icon-eather-shopping-cart.svg"
import UserAvatarIcon from "../../Assets/Icons/user-avatar.svg"
import DropDownIcon from "../../Assets/Icons/angle-down.svg"
import MenuIcon from "../../Assets/Icons/menu.svg"

import DarkUserAvatarIcon from "../../Assets/Icons/DarkIcons/darkuser.svg"
import DarkDropDownIcon from "../../Assets/Icons/DarkIcons/darkangle-down.svg"
import DarkCart from "../../Assets/Icons/DarkIcons/darkcart.svg"
import DarkMenuIcon from "../../Assets/Icons/DarkIcons/darkmenu.svg"

import { NavLink } from './NavLink'
import { Logo } from '../GeneralComponents/Logo'



export const Navbar = () => {
  const navlinks = ["services", "academy", "community", "workforce", "store", "affliate"]
  return (
    <nav className=" bg-white dark:bg-black dark:text-white w-full h-16 lg:h-[13%] flex shadow-xl lg:shadow-none justify-between items-center z-20 fixed top-0">
        <Logo extraClass="ml-5 lg:ml-10"/>
        <div className="space-x-5 z-30 relative hidden lg:flex">
            {
                navlinks.map((link,index)=> <NavLink key={index} text={link}/>)
            } 
        </div>
        <div className='flex items-center'>
            <img src={Cart} alt="Cart" className="mr-6 w-[20px] dark:hidden"/>
            <img src={DarkCart} alt="Cart" className="mr-4 w-[20px] hidden dark:block"/>
            <img src={MenuIcon} alt="Menu" className="lg:hidden mr-10 dark:hidden"/>
            <img src={DarkMenuIcon} alt="Menu" className="mr-5 lg:mr-10 dark:lg:hidden lg:hidden dark:block"/>
            <div className="items-center space-x-3 mr-10 hidden lg:flex">
                <img src={UserAvatarIcon} alt="User Avatar" className="w-[15px] dark:hidden"/>
                <img src={DarkUserAvatarIcon} alt="User Avatar" className="w-[15px] hidden dark:block"/>
                <span className="text-xs font-bold dark:font-medium">My Account</span>
                <img src={DropDownIcon} alt="User Avatar" className="w-[15px] dark:hidden"/>
                <img src={DarkDropDownIcon} alt="User Avatar" className="w-[15px] hidden dark:block"/>
            </div>
        </div>
    </nav>
  )
}
